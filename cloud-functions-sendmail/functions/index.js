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
       
        const dest1 = 'marcelacoronelp@gmail.com';
        const dest2 = 'anarativa09@gmail.com';
        // const dest3 = 'sguerraapaza@gmail.com';
        // const dest4 = 'sendy.fb@gmail.com';
        // const dest5 = 'rpiazzon@hotmail.com';

        const mailOptions = {
            from: 'Nexa Ambiental', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest1,
            to: dest2,
            subject: 'Llegó OEFA en', // email subject
            html: `<p>${unit}</p>
            <p style="font-size: 16px;">Nueva supervisión de OEFA registrada</p>
            <table>
                <tr >
                <th style="background-color: #FF7536; color: #FFFFFF;" colspan="2">NUEVA SUPERVISIÓN de OEFA</th>
                </tr>
                <tr >
                <th style="text-align: left;" style="background-color: #dddddd">Unidad</td>
                <td>${unit}</td>
                </tr>
                <tr style="background-color: #dddddd"> 
                <th style="text-align: left;">Tipo de Supervisión</td>
                <td>${typeSupervision}</td>
                </tr>
                <tr >   
                <th style="text-align: left;">Fecha de inicio</td>
                <td>${startDate}</td>
                </tr>
                <tr style="background-color: #dddddd">
                <th style="text-align: left;">Fecha de cierre</td>
                <td>${expirationDate}</td>
                </tr>
                <tr >
                <th style="text-align: left;">Objetivo</td>
                <td>${objective}</td>
                </tr>
                <tr style="background-color: #dddddd">
                <th style="text-align: left;">Líder de Supervisión</td>
                <td>${leader}</td>
                </tr>
                <tr >
                <th style="text-align: left;">Alterno</td>
                <td>${alternate}</td>
                </tr>
                <tr style="background-color: #dddddd">
                <th style="text-align: left;">Toma de muestras</td>
                <td>${probing}</td>
                </tr>
                <tr >
                <th style="text-align: left;">Áreas Operativas</td>
                <td>${operationalArea}</td>
                </tr>
                <tr style="background-color: #dddddd">
                <th style="text-align: left;">Comentarios</td>
                <td>${observations}</td>
            </tr>
            </table><br />
                <div>
                <span>Somos Nexa. Del mundo de la minería, al mundo de las personas.</span>
                 <img src="https://firebasestorage.googleapis.com/v0/b/nexa-lh.appspot.com/o/logo%2Flogo-nexa-suma.png?alt=media&token=92ce197a-1cf5-461a-beda-c02dac4b89df" style="width: 100px;"/>
                </div>
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

