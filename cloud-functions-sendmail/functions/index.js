const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nexa.ambiente.20@gmail.com',
        pass: 'Nexa1234'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const unit = req.body.contenido.unidad;
        const typeSupervision  = req.body.contenido.typeSupervision;
        const startDate  = req.body.contenido.startDate;
        const expirationDate  =  req.body.contenido.expirationDate ;
        const objective  = req.body.contenido.objective;
        const leader  = req.body.contenido.leader;
        const alternate  = req.body.contenido.alternate;
        const probing  = req.body.contenido.probing;
        const operationalArea  = req.body.contenido.operationalArea;
        const observations  = req.body.contenido.observations;

        
        // getting dest email by query string
        // const dest = req.query.dest;
        // const dest = 'rpiazzon@hotmail.com';
        const dest = 'marcelacoronelp@gmail.com';
        // const dest2 = 'anarativa09@gmail.com';

        const mailOptions = {
            from: 'Nexa Ambiental', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'NUEVA SUPERVISIÓN', // email subject
            html: `<p style="font-size: 16px;">DATOS REGISTRADOS DE LA NUEVA SUPERVISIÓN</p>
                <br /><p style="font-size: 16px;">Unidad:</p> <span>${unit}</span>
                <br /><p style="font-size: 16px;">Tipo de Supervisión:</p> <span> ${typeSupervision }</span>
                <br /><p style="font-size: 16px;">Fecha de inicio:</p> <span>${startDate}</span>
                <br /><p style="font-size: 16px;">Fecha de cierre:</p> <span> ${expirationDate}</span>
                <br /><p style="font-size: 16px;">Objetivo:</p> <span>${objective}</span>
                <br /><p style="font-size: 16px;">Líder:</p> <span>${leader}</span>
                <br /><p style="font-size: 16px;">Alterno:</p> <span>${alternate}</span>
                <br /><p style="font-size: 16px;">Toma de Muestras:</p><span>${probing}</span>
                <br /><p style="font-size: 16px;">Área Operativa:</p> <span>${operationalArea}</span>
                <br /><p style="font-size: 16px;">Observaciones:</p> <span>${observations }</span>
                <br />
                <br /> <img src="https://firebasestorage.googleapis.com/v0/b/nexa-lh.appspot.com/o/logo%2Flogo-nexa-suma.png?alt=media&token=92ce197a-1cf5-461a-beda-c02dac4b89df" style="width: 100px;"/>
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// exports.sendMail = functions.https.onRequest((request, responde) => {});