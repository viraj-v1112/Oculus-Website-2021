const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser'); // importing body parser middleware to parse form content from HTML
var nodemailer = require('nodemailer'); //importing node mailer

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serving our contact form on '/' route

const PORT = process.env.PORT || 1234;
app.listen(PORT, function () {});
console.log(process.env.EMAIL);

app.post('/sendemail', (req, res, next) => {
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: `${req.body.email}`,
    subject: `Registration for ${req.body.event} in Oculus 2021.`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width" name="viewport" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
          }
          table,
          td,
          tr {
            vertical-align: top;
            border-collapse: collapse;
          }
          *{
            line-height: inherit;
          }
          a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
          }
        </style>
        <style id="media-query" type="text/css">
          @media (max-width: 660px) {
            .block-grid,
            .col {
              min-width: 320px !important;
              max-width: 100% !important;
            }
            .block-grid {
              width: 100% !important;
            }
            .col {
              width: 100% !important;
            }
            .col_cont {
              margin: 0 auto;
            }
            img.fullwidth,
            img.fullwidthOnMobile {
              max-width: 100% !important;
            }
            .no-stack .col {
              min-width: 0 !important;
              display: table-cell !important;
            }
            .no-stack.two-up .col {
              width: 50% !important;
            }
            .no-stack .col.num2 {
              width: 16.6% !important;
            }
            .no-stack .col.num3 {
              width: 25% !important;
            }
            .no-stack .col.num4 {
              width: 33% !important;
            }
            .no-stack .col.num5 {
              width: 41.6% !important;
            }
            .no-stack .col.num6 {
              width: 50% !important;
            }
            .no-stack .col.num7 {
                width: 58.3% !important;
            }
            .no-stack .col.num8 {
              width: 66.6% !important;
            }
            .no-stack .col.num9 {
              width: 75% !important;
            }
            .no-stack .col.num10 {
              width: 83.3% !important;
            }
            .video-block {
              max-width: none !important;
            }
            .mobile_hide {
              min-height: 0px;
              max-height: 0px;
              max-width: 0px;
              display: none;
              overflow: hidden;
              font-size: 0px;
            }
            .desktop_hide {
              display: block !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
        <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;"valign="top" width="100%">
          <tbody>
            <tr style="vertical-align: top;" valign="top">
              <td style="word-break: break-word; vertical-align: top;" valign="top">
                <div style="background-color:#1d1d1d;">
                  <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #000000;">
                    <div style="border-collapse: collapse;width: 100%; background-image:linear-gradient(to right ,#ed00cc,#c722bf,#a32bae,#822e9c,#632c87,#533b8f,#434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef); position:relative;background-position:top left;background-repeat:no-repeat;">
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div class="col_cont" style="width:100% !important;">
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
                                            <span></span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
                              <a href="https://oculus.spit.ac.in" style="outline:none" tabindex="-1" target="_blank">
                                <img align="center" alt="Oculus" border="0" class="center fixedwidth" src="cid:footer@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 160px; display: block;" title="Oculus" width="160" />
                              </a>
                            </div>
                            <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
                                            <span></span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                              <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                <p style="font-size: 28px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 34px; margin: 0;">
                                  <span style="font-size: 28px;">
                                    <strong>
                                      Thank you for showing interest in
                                    </strong>
                                  </span>
                                  <br />
                                  <span style="font-size: 28px;">
                                    <strong>
                                      ${req.body.event}
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;">
                              <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                <p style="font-size: 17px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 20px; mso-ansi-font-size: 18px; margin: 0;">
                                  <span style="font-size: 17px; mso-ansi-font-size: 18px;">
                                    Our team will be contacting you shortly, you can register or even clarify any doubts you may have regarding this event with them, we'll be happy to help :)
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:35px;padding-right:35px;padding-bottom:35px;padding-left:35px;">
                              <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                <p style="font-size: 16px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 19px; margin: 0;">
                                  <span style="font-size: 16px;">
                                    <span style="font-size: 17px; mso-ansi-font-size: 18px;">
                                      ${req.body.event} is an event not to be missed. There are limited seats so we recommend you to register and save your seats as soon as you can.
                                    </span>
                                  </span>
                                </p>
                                <p style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">
                                  <br />
                                  <strong>
                                    <span style="font-size: 17px; mso-ansi-font-size: 18px;">
                                      See you on 12th, 13th &amp; 14th March!
                                    </span>
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="background-color:#1d1d1d;">
                  <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                    <div  style="border-collapse: collapse;display: table;width: 100%;background-image:linear-gradient( to right ,#ed00cc,#c722bf,#a32bae,#822e9c,#632c87,#533b8f,#434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef );background-position:top center;background-repeat:no-repeat">
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div class="col_cont" style="width:100% !important;">
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                            <div style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                              <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                                <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">
                                  <strong>
                                    For all the latest updates and booking of your favorite events 
                                  </strong>
                                  <br />
                                  <strong>
                                    Download the official App of Oculus 2021
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="background-color:#1d1d1d;">
                  <div class="block-grid" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #1d1d1d;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#1d1d1d;background-image:linear-gradient( to right, #ed00cc,#c722bf,#a32bae, #822e9c, #632c87,#533b8f, #434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef );background-position:top center;background-repeat:no-repeat">
                      <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
                        <div class="col_cont" style="width:100% !important;">
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                            <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                              <a href="https://play.google.com/store/apps/details?id=com.spit.fest.oculus&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #393d47; background-color: #ffffff; border-radius: 23px; -webkit-border-radius: 23px; -moz-border-radius: 23px; width: auto; width: auto; border-top: 1px solid #8a3b8f; border-right: 1px solid #8a3b8f; border-bottom: 1px solid #8a3b8f; border-left: 1px solid #8a3b8f; padding-top: 5px; padding-bottom: 5px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all; "target="_blank">
                                <span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;">
                                  <span style="font-size: 16px; line-height: 2; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 32px;">
                                    <strong>
                                      Download Now
                                    </strong>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="background-color:#1d1d1d;">
                  <div class="block-grid mixed-two-up no-stack" style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #000000;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#000000;">
                      <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px;">
                        <div class="col_cont" style="width:100% !important;">
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <div align="center" class="img-container center fixedwidth" style="padding-right: 10px;padding-left: 10px;">
                              <div style="font-size:1px;line-height:10px"> </div>
                              <a href="https://oculus.spit.ac.in" style="outline:none" tabindex="-1" target="_blank">
                                <img align="center" alt="Oculus" border="0" class="center fixedwidth" src="cid:footer@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 127px; display: block;" title="Oculus" width="127" />
                              </a>
                              <div style="font-size:1px;line-height:10px"> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col num8" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 424px; width: 426px;">
                        <div class="col_cont" style="width:100% !important;">
                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                            <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 35px; padding-bottom: 0px; padding-left: 5px;" valign="top">
                                    <table align="right" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                                      <tbody>
                                        <tr align="right" style="vertical-align: top; display: inline-block; text-align: right;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top">
                                            <a href="https://www.facebook.com/watch/OculusSeesAll/" target="_blank">
                                              <img alt="Facebook" height="32" src="cid:facebook2x@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32" />
                                            </a>
                                          </td>
                                          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top">
                                            <a href="https://twitter.com/OculusSeesAll" target="_blank">
                                              <img alt="Twitter" height="32" src="cid:twitter2x@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32" />
                                            </a>
                                          </td>
                                          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top">
                                            <a href="https://www.linkedin.com/company/oculusseesall/" target="_blank">
                                              <img alt="Linkedin" height="32" src="cid:linkedin2x@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="linkedin" width="32" />
                                            </a>
                                          </td>
                                          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top">
                                            <a href="https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/" target="_blank">
                                              <img alt="Instagram" height="32" src="cid:instagram2x@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32" />
                                            </a>
                                          </td>
                                          <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 0px; padding-left: 4px;" valign="top">
                                            <a href="https://www.youtube.com/channel/UCm5gXAKIwUQTuGngoGlM4pg" target="_blank">
                                              <img alt="YouTube" height="32" src="cid:youtube2x@oculus.com" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="YouTube" width="32" />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>`,
    attachments: [
      {
        filename: 'Oculus_Footer_Logo.png',
        path: 'images/Oculus_Footer_Logo.png',
        cid: 'footer@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'youtube2x.png',
        path: 'images/youtube2x.png',
        cid: 'youtube2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'linkedin2x.png',
        path: 'images/linkedin2x.png',
        cid: 'linkedin2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'facebook2x.png',
        path: 'images/facebook2x.png',
        cid: 'facebook2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'instagram2x.png',
        path: 'images/instagram2x.png',
        cid: 'instagram2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'twitter2x.png',
        path: 'images/twitter2x.png',
        cid: 'twitter2x@oculus.com', //same cid value as in the html img src
      },
    ],
  };

  var mailOptionsPronite = {
    from: process.env.EMAIL,
    to: `${req.body.email}`,
    subject: `Registration for ${req.body.event} in Oculus 2021.`,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title></title>
          <style type="text/css">
            a { 
              color: #57578a; 
              text-decoration: none; 
            } 
            @media (max-width: 480px) { 
              #u_content_image_1 .v-container-padding-padding { 
                padding: 33px 10px 20px !important; 
              } 
              #u_content_image_1 .v-src-width { 
                width: 3155px !important; 
              } 
              #u_content_image_1 .v-src-max-width { 
                max-width: 50% !important; 
              } 
              #u_content_image_2 .v-container-padding-padding { 
                padding: 0px 8px 13px 10px !important; 
              } 
              #u_content_image_2 .v-src-width { 
                width: 1080px !important; 
              } 
              #u_content_image_2 .v-src-max-width { 
                max-width: 98% !important; 
              } 
              #u_content_text_2 .v-container-padding-padding { 
                padding: 20px 10px 6px !important; 
              } 
              #u_content_button_6 .v-container-padding-padding { 
                padding: 19px !important; 
              } 
              #u_content_button_6 .v-button-colors { 
                color: #FFFFFF !important; background-color: #000000 !important; 
              } 
              #u_content_button_6 .v-border-radius { 
                border-radius: 21px !important; 
                -webkit-border-radius: 21px !important; 
                -moz-border-radius: 21px !important; 
              } 
            }
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
            @media (max-width: 620px) {
              .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
              }
              .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
              }
              .u-row {
              width: calc(100% - 40px) !important;
              }
              .u-col {
              width: 100% !important;
              }
              .u-col > div {
              margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
            table, tr, td {
              vertical-align: top;
              border-collapse: collapse;
            }
            p {
              margin: 0;
            }
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
            * {
              line-height: inherit;
            }
            a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
            }
          </style>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        </head>
        <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;backgorund-image: linear-gradient(to bottom, rgb(238, 66, 111) 0%, rgb(199, 98, 162) 82%, rgb(188, 106, 176) 99%, rgb(229, 230, 234) 100%);">
          <div style="border-collapse: collapse;display: table;width: 100%;background-image: linear-gradient(to bottom, rgb(238, 66, 111) 0%, rgb(199, 98, 162) 82%, rgb(188, 106, 176) 99%, rgb(229, 230, 234) 100%); position:relative;background-position:top left;background-repeat:no-repeat;">
            <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;width:100%" cellpadding="0" cellspacing="0">
              <tbody>
                <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-image:linear-gradient(to bottom ,'#ee426e' , '#918de8');background-repeat: no-repeat;background-position: center top;">
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="width: 100% !important;">
                              <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table id="u_content_image_1" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:41px 10px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                              <a href="https://oculus.spit.ac.in/" target="_blank">
                                                <img align="center" border="0" src="cid:footer@oculus.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 34%;max-width: 197.2px;" width="197.2" class="v-src-width v-src-max-width"/>
                                              </a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:18px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                                          <p style="font-size: 14px; line-height: 140%;">
                                            <span style="font-size: 18px; line-height: 25.2px;">
                                              <strong>
                                                <span style="line-height: 25.2px; font-size: 18px;">
                                                  YOU HAVE SUCCESSFULLY REGISTERED FOR
                                                </span>
                                              </strong>
                                            </span>
                                          </p>
                                          <p style="font-size: 14px; line-height: 140%;">
                                            <span style="font-size: 34px; line-height: 47.6px;">
                                              <strong>
                                                <span style="line-height: 47.6px; font-size: 34px;">
                                                  <span style="line-height: 47.6px; font-size: 34px;">
                                                    STANDUP COMEDY-NITE
                                                  </span>
                                                </span>
                                              </strong>
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div align="center">
                                          <a href="" target="_self" class="v-button-colors v-border-radius" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #000000; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                            <span style="display:block;padding:10px 20px;line-height:120%;">
                                              <span style="font-size: 14px; line-height: 16.8px;">
                                                S T R E A M I N G&nbsp; &nbsp;L I V E
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div align="center">
                                          <a href="" target="_self" class="v-button-colors v-border-radius" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #83fcf4; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                            <span style="display:block;padding:12px 30px;line-height:100%;">
                                              <span style="font-size: 10px; line-height: 10px;">
                                                <strong>
                                                  <span style="font-family: Montserrat, sans-serif; line-height: 10px; font-size: 10px;">
                                                    MARCH 14TH - SUNDAY - 8.00PM ONWARDS
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div align="center">
                                          <a href="" target="_self" class="v-button-colors v-border-radius" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #ffffff; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width:100%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                            <span style="display:block;padding:12px;line-height:120%;">
                                              <span style="font-size: 16px; line-height: 19.2px;">
                                                <span style="line-height: 19.2px; font-size: 16px;">
                                                  <strong>
                                                    <span style="line-height: 19.2px; font-size: 16px;">
                                                      KUMAR VARUN AND AZEEM BANATWALLA
                                                    </span>
                                                  </strong>
                                                </span>
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table id="u_content_image_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:9px 65px 32px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                              <img align="center" border="0" src="cid:comedian@oculus.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 68%;max-width: 357px;" width="357" class="v-src-width v-src-max-width"/>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table id="u_content_text_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div style="color: #ffffff; line-height: 200%; text-align: center; word-wrap: break-word;">
                                          <p style="line-height: 200%; font-size: 14px;">
                                            <span style="font-size: 16px; line-height: 32px;">
                                              To get further updates on StandUp Comedy-Nite.
                                            </span>
                                          </p>
                                          <p style="line-height: 200%; font-size: 14px;">
                                            <span style="font-size: 16px; line-height: 32px;">
                                              Download the Official App of Oculus
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table id="u_content_button_6" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:24px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div align="center">
                                          <a href="https://play.google.com/store/apps/details?id=com.spit.fest.oculus" target="_blank" class="v-button-colors v-border-radius" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #000000; border-radius: 19px; -webkit-border-radius: 19px; -moz-border-radius: 19px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                            <span style="display:block;padding:10px 20px;line-height:120%;">
                                              <span style="font-size: 14px; line-height: 16.8px;">
                                                Download Now
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="width: 100% !important;">
                              <div style="padding: 9px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:32px 4px 4px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div align="center">
                                          <div style="display: table; max-width:274px;">
                                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 23px">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                    <a href=" https://www.facebook.com/watch/OculusSeesAll/" title="Facebook" target="_blank">
                                                      <img src="cid:facebook2x@oculus.com" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 23px">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                    <a href=" https://twitter.com/OculusSeesAll" title="Twitter" target="_blank">
                                                      <img src="cid:twitter2x@oculus.com" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 23px">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                    <a href=" https://www.linkedin.com/company/oculusseesall/" title="LinkedIn" target="_blank">
                                                      <img src="cid:linkedin2x@oculus.com" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 23px">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                    <a href=" https://www.instagram.com/accounts/login/?next=/o.c.u.l.u.s_s.p.i.t/" title="Instagram" target="_blank">
                                                      <img src="cid:instagram2x@oculus.com" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                    <a href=" https://www.youtube.com/channel/UCm5gXAKIwUQTuGngoGlM4pg" title="YouTube" target="_blank">
                                                      <img src="cid:youtube2x@oculus.com" alt="YouTube" title="YouTube" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:19px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                        <div style="color: #444444; line-height: 140%; text-align: left; word-wrap: break-word;">
                                          <p style="line-height: 140%; text-align: center; font-size: 14px;">
                                            <span style="font-size: 10px; line-height: 14px;">
                                              <strong>
                                                SARDAR PATEL INSTITUTE OF TECHNOLOGY
                                              </strong>
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </html>
    `,
    attachments: [
      {
        filename: 'Oculus_Footer_Logo.png',
        path: 'images/Oculus_Footer_Logo.png',
        cid: 'footer@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'comedian.png',
        path: 'images/comedian.png',
        cid: 'comedian@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'youtube2x.png',
        path: 'images/youtube2x.png',
        cid: 'youtube2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'linkedin2x.png',
        path: 'images/linkedin2x.png',
        cid: 'linkedin2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'facebook2x.png',
        path: 'images/facebook2x.png',
        cid: 'facebook2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'instagram2x.png',
        path: 'images/instagram2x.png',
        cid: 'instagram2x@oculus.com', //same cid value as in the html img src
      },
      {
        filename: 'twitter2x.png',
        path: 'images/twitter2x.png',
        cid: 'twitter2x@oculus.com', //same cid value as in the html img src
      },
    ],
  };

  transporter.sendMail(
    req.body.event == 'Stand Up Comedy-Nite' ? mailOptionsPronite : mailOptions,
    function (error, info) {
      if (error) {
        console.log(error);
        res.send('error'); // if error occurs send error as response to client
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Sent Successfully'); //if mail is sent successfully send Sent successfully as response
      }
    }
  );
});
