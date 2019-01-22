// language file v2.0.2

DATA.de = {

  header : `
<table width="100%" bgcolor="#eee" border="0" cellpadding="0" cellspacing="0" style="padding:25px;background-color:#eee;padding-bottom:0px;">
  <tr>
    <td>
      <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
      <![endif]-->
      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%;max-width: 600px;">

        <tr>
          <td bgcolor="#fff" style="padding: 20px;">
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="text-align:center;">  
              <tr>
                <td >
                  <a href="%%ecommerceURL%%">
                    <img src="%%imagesURL%%logoEmail.jpg" width="210" height="auto" border="0" alt="%%ecommerceName%%" style="height: auto;">
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
`,

  footer : `
      <tr>
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">    
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% --> 
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% --> 
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% --> 
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->  
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
    <![endif]-->
    </td>
  </tr>
  <tr>
    <td align="center" style="font-family: sans-serif;font-size: 14px;color: #ffffff;">   
      <span style="color:#000;font-size:10px;">&nbsp; </span>
    </td>
  </tr>
</table>
`,

  mails : {

    1 : {
      subject : "Vielen Dank für Ihre Anmeldung bei %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Willkommen bei %%ecommerceName%%!</strong><br><br>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%, <br><br>
      Wir freuen uns, Ihnen die Erstellung Ihres Kundenkontos bestätigen zu können%%ecommerceURL%%.<br><br>
      Dank Ihres Kundenkonto Sie Ihr Profil und Ihr Passwort aktualisieren, Ihren Bestellverlauf überprüfen und andere interessante Informationen erhalten.<br><br>
      Wir hoffen Sie bald begrüßen zu dürfen, bei <a href="%%ecommerceURL%%" style="color: #000;">%%ecommerceName%%</a><br><br>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%</span>
  </td>
</tr>
`,
      footer : `
      <tr>
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">    
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% --> 
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% --> 
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% --> 
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->  
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
    <![endif]-->
    </td>
  </tr>
  <tr>
    <td align="center" style="font-family: sans-serif;font-size: 14px;padding:10px;">   
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Abmeldung vom</span></a>
      <span style="color:#000;font-size:10px;">Newsletter</span>
    </td>
  </tr>
</table>
`
    }, // end 1
    
    2 : {
      subject : "Niedriger Benutzer in %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bestätigung Löschung Kundenkonto</strong><br><br>
    <span style="font-size:15px;">
      Hallo,<br/><br/>
      Wie bei Ihrem letzten Besuch bei %%ecommerceName%% angefordert, bestätigen wir ihnen das Ihr Benutzerkonto %%email%% aus unserer Datenbank entfernt worden ist.<br/><br/>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%</span>
  </td>
</tr>
`
    }, // end 2

    3 : {
      subject : "Passwort von %%ecommerceName%% merken",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Passwort erinnern</strong><br><br>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%,<br/><br/>
      Wie bei Ihren letzten Besuch bei %%ecommerceName%%, , angefordert, haben Sie hier Ihre Zugangsadresse zur Passwort-Wiederherstellungszone:<br/><br/>
      <a href="%%lostPasswordLink%%" style="color:#000">Klicken Sie um das Passwort wiederherzustellen</a><br/><br/>
      Dieser Link ist nur während der nächsten 24 Stunden mehr gültig.<br/><br/>
      Wir hoffen ie bald wieder zu sehen, bei <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br/><br/>
      Herzlichst, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 3

    4 : {
      subject : "Passwortänderung für %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Passwort ändern</strong><br><br>
    <span style="font-size:15px;">
      Hallo %%firstName%% %%lastName%%,<br><br>
      Wir bestätigen Ihnen, dass Ihr Passwort geändert wurde.<br><br>
      Bewahren Sie Ihre Zugangsdaten an einem sicheren Ort auf .<br><br>
      Wir hoffen Sie bald begrüßen zu dürfen, bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 4

    5 : {
      subject : "Abonnieren Sie den Newsletter in %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Newsletter-Abonnement</strong><br><br>
    <span style="font-size:15px;">
      Hallo<br/><br/>
      >Danke für das Abonnement unseres Newsletters. 
      Bald werden Sie Infos über Aktivitäten, Nachrichten über unser Unternehmen, Neuigkeiten über Produkte und Angebote erhalten.<br/><br/>
      Wir hoffen, Sie bald zu sehen, bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>
    </span>
  </td>
</tr>
`,
      footer : `
      <tr>
        <td bgcolor="#E8E8E8" style="padding: 30px 30px 15px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">    
            <tr>
              <td align="center" >
                <table border="0" cellspacing="10" cellpadding="0">
                  <tr>
                    <!-- %%Pages-501-Loop%% -->
                      <td style="text-align: center;">
                        <a href="%%pageLink%%" style="padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;" target="%%pageTarget%%"> %%pageName%% </a>
                      </td>
                    <!-- %%/Pages-501-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 12px 0 12px 0px;">
                <table border="0" cellspacing="8" cellpadding="0">
                  <tr>
                    <!-- %%Banners-502-Loop%% --> 
                      <td width="30" style="text-align: center;">
                        <a href="%%BannerLink%%">
                          <img src="%%BannerImage%%" width="30" height="auto" alt="%%BannerAlt%%" border="0" style="height: auto;">
                        </a>
                      </td>
                    <!-- %%/Banners-502-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" >
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <!-- %%Pages-503-Loop%% --> 
                      <td style="text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                        <span style="color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;">
                          %%pageContent%%
                        </span>
                      </td>
                    <!-- %%/Pages-503-Loop%% -->
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <!-- %%Pages-504-Loop%% --> 
                <td align="center" style="font-family:Arial, sans-serif;font-size: 13px;color: #454545;">
                  %%pageContent%%
                </td>
              <!-- %%/Pages-504-Loop%% -->  
            </tr>
            <tr>
              <td align="center" heigth="50" style="font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;">
                Für mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
    <![endif]-->
    </td>
  </tr>
  <tr>
    <td align="center" style="font-family: sans-serif;font-size: 14px;padding:10px;">   
      <a href="%linkDeleteSubscription%" style="color: #000;text-decoration: underline;font-size:10px;line-height:13px;"><span color="#000">Abmeldung vom</span></a>
      <span style="color:#000;font-size:10px;">Newsletter</span>
    </td>
  </tr>
</table>
`
    }, // end 5

    6 : {
      subject : "%%anonymousName%% empfiehlt Ihre Lieblingsprodukte von %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Empfehlung für die Wunschliste</strong><br/><br/>
    <span style="font-size:15px;">
      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das für Sie von Interesse sein könnte.<br/><br/>
      Sollten Sie weitere Informationen zu diesem Produkt benötigen, können Sie uns kontaktieren, und zwar unter <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a><br/><br/>
      Mit freundlichen Grüssen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Empfohlene Produkte
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->
                  
                </tbody>
              </table>
              
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong >Nachricht Ihres/Ihrer Freund/in:</strong><br/>
                  %%comments%% 
                </td>
              </tr>
            </table>        
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 6

    7 : {
      subject : "%%anonymousName%% empfiehlt ein %%ecommerceName%%-Produkt",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Produktempfehlung</strong><br/><br/>
    <span style="font-size:15px;">
      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das von Ihrem Interesse sein könnte.<br/><br/>
      Für weitere Informationen kontaktieren Sie uns bitte unter <a href="%%ecommerceURL%%" style="color:#000 ">%%ecommerceName%%</a><br/><br/>
      Herzlichst, das Team von %%ecommerceName%%</span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Empfohlene Produkte
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="80%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
                  </tr>
                  
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong >Nachricht von Ihrem Freund:</strong><br/>
                  %%comments%% 
                </td>
              </tr>
            </table>        
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 7

    8 : {
      subject : "%%ecommerceName%%-Kontaktformular",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Kontaktformular</strong><br><br>
    <span style="font-size:15px;">
      Name: %%anonymousFirstName%%<br/>
      Email: %%anonymousEmail%%<br/>
      Telefon: %%anonymousPhone%%<br/>
      Grund deer Anfrage: %%queryMotive%%<br/>
      Nachricht: %%comments%%
    </span>
  </td>
</tr>
`
    }, // end 8

    9 : {
      subject : "Beratung zu %%ecommerceName%%-Produkten",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Produktanfrage</strong><br><br>
    <span style="font-size:15px;">
      Name: %%anonymousFirstName%%<br/>
      Familienname: %%anonymousLastName%%<br/>
      Email: %%anonymousEmail%%<br/>
      Telefon: %%anonymousPhone%%<br/>
      Nachricht: %%comments%%<br/><br/>
      Produktname: %%name%%<br/>
      Produktreferenz: %%sku%%
    </span>
  </td>
</tr>
`
    }, // end 9

    10 : {
      subject : "Bestellbestätigung - %%orderNumber%% - %%ecommerceName%%",
      html : `
<style type="text/css">
  ul {
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bestellbestätigung</strong><br>
    <span style="font-size:15px;">
      Vielen Dank für Ihr Vertrauen. Ihre Bestellung wurde korrekt bearbeitet. Nachfolgend sehen Sie die Bestelldaten
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif;" align="right">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="30%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                  Bestellnummer:<br>
                  Bestelldatum:<br>
                  Zustand:<br>
                </td>
                <td width="80%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>%%orderNumber%% </strong><br>
                  <strong>%%orderDate%%</strong><br>
                  <strong>Bestätigt</strong><br>
                </td>
              </tr>  
            </table>
          </td>  
        </tr>
        <tr>
          <td style="vertical-align: middle;font-family: sans-serif;" align="right">
            <table width="100%" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="50%" style="vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;" >
                  <strong>Rechnungsadresse:</strong><br>
                  %%firstName%% %%lastName%%<br>
                  %%address%% <br>
                  %%zip%%  %%city%%<br>
                  %%state%%<br>
                </td>
                <td width="50%" style="vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;" >
                  <strong>Lieferadresse:</strong><br>
                  %%shippingFirstName%%  %%shippingLastName%% <br>
                  %%shippingAddress%% <br>
                  %%shippingZip%%  %%shippingCity%% <br>
                  %%shippingState%% <br>
                </td>
              </tr>  
            </table>
          </td>  
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Bestelldetails
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Betrag</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                            <div style="font-size: 10px;">%productOptions%</div>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->

                  <!-- %ifOrderGifts% -->
                  <!-- %giftsLoop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage%" alt="%name%" onerror="this.style.display='none';"> 
                          </td>  
                          <td style="padding: 10px 0px;">
                            <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;">&nbsp;</td>
                  </tr>
                  <!-- %/giftsLoop% -->
                  <!-- %/ifOrderGifts% -->
                  
                </tbody>
              </table>
              <table align="center" cellpadding="0" cellspacing="0" width="88%" style="color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;">
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%shipperName%%  %%shippingTypeName%%</td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span> %%shippingMethodWithPrice%% </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">%%paymentMethod%% </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%paymentMethodPrice%% </span>
                    </span>
                  </td>
                </tr>
                <!-- %%ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">
                    Rabatte
                  </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderDiscounts%%</span>
                    </span>
                  </td>
                </tr>
                <!-- %%/ifOrderDiscount%% -->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                    Zwischensumme
                  </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTotalWithoutTaxes%%</span> 
                    </span>
                  </td>
                </tr>

                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">
                    Steuern
                  </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>%%orderTaxes%% </span>
                    </span>
                  </td>
                </tr>
                <!--%%ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;">
                    Gutscheine
                  </td>
                  <td height="32" width="75" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;">
                    <span>
                      <span>- %%orderBalanceCodes%%</span>
                    </span>
                  </td>
                </tr>
                <!--%%/ifOrderBalanceCodes%%-->
                <tr>
                  <td height="32" width="120" bgColor="#f4f4f4" style="vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                    Gesamt
                  </td>
                  <td height="32" width="75" bgColor="#f4f4f4" style="text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;">
                    <span>
                      <span>%%total%%</span>
                    </span>
                  </td>
                </tr>
                
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <!-- %%ifComments%% -->
        <tr>
          <td>
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;">
              <tr>
                <td>
                  <strong >Kommentare:</strong><br/>
                  %%orderComments%% 
                  
                </td>
              </tr>
            </table>        
          </td>
        </tr>
        <!-- %%/ifComments%% -->
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td bgColor="#f4f4f4">
            <table width="88%" align="center" style="font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;" cellspacing="0" cellpadding="0">
              <tr>
                <td style="padding: 15px 0px 15px 0px;">
                  %%textToEmail%%
                </td>
              </tr>
            </table>            
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 10

    11 : {
      subject : "Laden Sie den %%ecommerceName%%-Newsletter herunter",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bestätigung der Newsletter-Abmeldung</strong><br><br>
    <span style="font-size:15px;">
      Hallo<br><br>
      Sie wurden erfolgreich vom Newsletter abgemeldet.<br><br>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 11

    12 : {
      subject : "Ihr Freund möchte Sie sponsern",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Bewerbung für Sponsoring</strong><br><br>
    <span>
      Hallo,<br><br>
      %%firstName%% lädt Sie ein, sich<a style="color:#000;" href="%%ecommerceURL%%">%%ecommerceName%%</a> anzuschließen<br><br>
      Werden Sie Mitglied und registrieren Sie sich hier: 
    </span>
    <a href="%%urlRegisterSponsorShip%%" style="color:#000;">%%ecommerceName%%</a><br><br>
    Danke für Ihre Unterstützung.<br><br>
    Mit freundlichen Grüßen das Team von %%ecommerceName%%
  </td>
</tr>
`
    }, // end 12

    13 : {
      subject : "Ihr Sponsor hat einen Einkauf getätigt: Genießen Sie Ihren Rabatt.",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;text-align:center;">
    <strong>Sponsoring abgeschlossen</strong><br><br>
    <span>
      Hallo,<br/><br/>
     Einer Ihrer Freunde hat gerade einen Einkauf in unserem Shop im Wert von XX (€) getätigt, deshalb bieten wir Ihnen einen Rabatt von XX auf Ihre nächste Bestellung an.<br/><br/>
      Der Rabatt gilt automatisch bei Ihrer nächsten Bestellung.<br/><br/>
      Danke für Ihre Unterstützung.<br/><br/>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 13

    14 : {
      subject : "Rückgabeanforderung - %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Rücksendeinformationen</strong><br/><br/>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%, <br/><br/>
      Wir bestätigen Ihnen gerne Ihr Rückgabeansuchen.<br/><br/>
      Bestellnummer: %%orderNumber%%<br/><br/>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 14

    15 : {
      subject : "Unvollständige Bestellung von %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Unvollständige Bestellinformationen</strong><br/><br/>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%, <br/><br/>
      Bei Ihrem letzten Besuch in unserem Shop haben Sie die folgenden Produkte in den Warenkorb gelegt, aber die Bestellung nicht abgeschlossen.<br/><br/>
      Klicken Sie auf <a target="_blank" href="%recoverOrderLink%" style="color:#000;">hier</a> wenn Sie Ihre Bestellung wieder aufrufen möchten.<br/><br/>
      Mit freundlichen Grüßen, das Team %%ecommerceName%%
    </span>
  </td>
</tr>
<tr>
  <td style="padding: 0px 0px;" align="center">
    <table style="width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;">
      <tbody>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td align="center">
            <span style="font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;">
              Details der unvollständigen Bestellung
            </span>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          <td style="vertical-align: top">
            <div style="padding: 0 0">
              <table style="border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" width="88%" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td width="60%" height="32" style="color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Produkt</td>
                    <td width="20%" height="32" style="color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Menge</td>
                    <td width="20%" height="32" style="color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;" bgColor="#F4F4F4">Preis</td>
                  </tr>
                  <!-- %loop% -->
                  <tr>
                    <td style="text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;">
                      <table style="color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;" >
                        <tr>
                          <td style="padding: 10px 0px;">
                            <img width="60" src="%smallImage% " alt="%name%" onerror="this.style.display='none';"> 
                          </td> 
                          <td style="padding: 10px 0px;">
                            %sku% - <a href=" %productLink%" title="%name%" target="_blank" rel="noreferrer" style="text-decoration:none;"><span style="color: #454545; text-decoration: none">%name%</span></a>
                          </td>
                        </tr>
                      </table>        
                    </td>
                    <td style="text-align: center;border-bottom:1px solid #dcdcdc;">%quantity%</td>
                    <td style="text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;"><span><span>%price%</span></span></td>
                  </tr>
                  <!-- %/loop% -->
                  
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
      </tbody>
    </table>
  </td>
</tr>
`
    }, // end 15

    16 : {
      subject : "Trägerbenachrichtigung",
      html : `
TEXTHERE
`
    }, // end 16

    17 : {
      subject : "Überprüfung der Post - %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Überprüfung der Email Adresse</strong><br/><br/>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%,<br/><br/>
      Danke für Ihre Anmeldung bei %%ecommerceURL%%. Bitte aktivieren Sie Ihr Konto und klicken Sie <a href="%verifyLink%" style="color:#000;">hier-</a>.<br/><br/>
      Wir hoffen, Sie bald zu begrüßen bei <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br/><br/>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 17

    18 : {
      subject : "Kontoaktivierung - %%ecommerceName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Kontoaktivierung</strong><br><br>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%,<br/><br/>
      Wir benachrichtigen Sie, dass Ihr Konto in %%ecommerceURL%% korrekt aktiviert wurde.<br/><br/>
      Um Ihre Daten und alle Informationen über Ihr Konto anzuzeigen, gehen Sie auf das Kontrollfeld: <a href="%%ecommerceURL%%" style="color:#000">Bearbeiten Sie Ihr Profil</a><br/><br/>
      Wir hoffen Sie bald zu sehen bei <a href="%%ecommerceURL%%" style="color:#000">%%ecommerceName%%</a>.<br/><br/>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 18

    19 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 19

    20 : {
      subject : "Lager verfügbar",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Lagerbestand des Produkts <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong>%productOptions%<br/><br>
    <span style="font-size:15px;">Hallo,<br/><br/>Der Artikel, den so sehr wollen, ist bereits verfügbar!</span>
    <span style="font-size:15px;">
      Wir möchten Sie daran erinnern, dass diese E-Mail Informationen über die Verfügbarkeit dieses Artikels enthält und von vielen Faktoren (Interessenten, verfügbare Einheiten) abhängt.
      Wir haben diese E-Mail an alle Kunden geschickt, die sich für diesen Artikel interessieren, so dass es möglich ist, dass er sehr bald wieder vergriffen ist.<br/><br/>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 20

    22 : {
      subject : "Neuer Artikel im %ecommerceName% Blog!",
      html : `
<!-- %loop% -->
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Unten können Sie die neuesten, veröffentlichten Artikel lesen <a href="%%blogUrl%%" style="color:#000">%%blogName%%</a>.<br/><br/>
    <strong><a href="%%postLink%%" style="color:#000;font-size:18px;text-decoration:none;">%%postName%%</a></strong>
  </td>
</tr>
<tr>
  <td align="center" >
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="30" style="text-align: center;">
          <a href="%%postLink%%" style="color:#000;">
            <img src="%%postSmallImage%%" height="auto" width="115" border="0" style="height: auto;" alt="%%postName%%">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <span style="font-size:15px;">%%postShortText%%<br/><br/><a href="%%postLink%%" style="color:#000;text-decoration:none;"><strong>Lesen Sie weiter!</strong></a>.</span>
  </td>
</tr>
<!-- %/loop% -->
`
    }, // end 22

    23 : {
      subject : "Neuer Kommentar in %%postName%% - %%blogName%%",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;">
    Jemand hat gerade auf den Artikel geantwortet "<a href="%%postLink%%" style="color:#000">%%postName%%</a>.<br/><br/>
  </td>
</tr>
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <table border="0" cellspacing="10" cellpadding="0" width="100%">
      <tr>
        <td style="text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="30%">
          <img src="%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75" width="75" border="0" height="75">
        </td>
        <td style="text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;" width="70%">
          <a style="color:#000;text-decoration:none;" href="%%postLink%%#comment%%commentId%%">%%commentNick%%</a><br/>
          %%commentContent%%<br/><br/>
          <span style="font-size:15px;"><a href="%%postLink%%#comment%%commentId%%" style="color:#000;text-decoration:none;"><strong>Lesen Sie weiter!</strong></a>.</span>
        </td>
      </tr>
    </table>
  </td>
</tr>
`
    }, // end 23

    24 : {
      subject : "Willkommen bei %%blogName%%!",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Willkommen <a href="%%blogUrl%%" style="color:#000;">%%blogName%%</a>!</strong><br/><br/>
    <span style="font-size:15px;">
      Hallo %firstName% %lastName%,<br/><br/>
      Danke für die Anmeldung zu unserem Blog. Bald werden Sie die neuen Artikel per E-Mail erhalten, Informationen über Rabatte, Werbeaktionen, Geschenke und interessante Informationen im Zusammenhang mit der Aktivität des Online-Shops.<br/><br/>
      Wir hoffen Sie bald begrüßen zu dürfen unter <a href="%%ecommerceURL%%" style="color:#000;">%%ecommerceName%%</a>.<br/><br/>
      Mit freundlichen Grüßen, das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 24

    25 : {
      subject : "Aktienabonnement",
      html : `
<tr>
  <td style="padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;">
    <strong>Abonnieren Sie den Produktbestand <a href="%productLink%" style="color:#000;font-size:15px;">%name%</a></strong><br><br>
    <span style="font-size:15px;">Hallo,<br/><br/>Sie haben Sich für den Lagerbestand-Alarm angemeldet, von %name%</span>
    %productOptions%<br/>
    <span style="font-size:15px;">
      Wenn wir diesen Artikel wieder erhalten, werden wir Sie sofort informieren, damit er Ihnen nicht entgeht.<br/><br/>
      Mit freundlichen Grüßen das Team von %%ecommerceName%%
    </span>
  </td>
</tr>
`
    }, // end 25

    26 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 26

    27 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 27

    32 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 32

    33 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 33

    34 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 34

    35 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 35

    36 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 36

    37 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 37

    38 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 38

    39 : {
      subject : "",
      html : `
TEXTHERE
`
    }, // end 39

  } // end emails
};
