How to use
----------

1. Öncelikle projenize LoginPro'yu import edin

2. Sonra `Sentinel/LoginPro/Server/LoginProServer_source.zip` arşivini zipten çıkarın.

3. Bilgisayarınızda [NodeJS](https://nodejs.org/)  kurulu olduğundan emin olun

4. Çıkardığınız `LoginProServer_source` klasörüne gidin ve `CMD` yada `Terminal` başlatın.

5. `CMD/Terminal` üzerinden `npm install` komutunu çalıştırın.


.ENV dosyası nasıl ayarlanır?
------------------------------------------------------

*   **ENV dosyası nedir?** : `.env` dosyası ortam değişkenlerimizin bulunduğu dosyadır ve bilgilerimizi burada tutarız. Örneğin: Sunucu bilgileri, veritabanı bilgileri, SMTP bilgileri.

*   #### SERVER (Sunucu Ayarları):

    **URL**: Sunucunun başladığında kullanılacak URL. Bu, uygulamanın hangi URL üzerinde çalışacağını belirtir.
    
    **PORT**: Sunucunun başlayacağı port numarası. Bu, uygulamanın hangi port üzerinden erişilebileceğini belirtir.
    
    **JWT_SECRET** (JWT Kimlik Doğrulama İçin Gizli Anahtar): JWT kimlik doğrulama için kullanılacak gizli anahtar. Bu anahtar, JWT tokenlarını oluştururken ve doğrularken kullanılır.
    
    **SESSION_SECRET** (Oturum Gizli Anahtar): Oturum yönetimi için kullanılacak gizli anahtar. Bu, oturumları güvence altına alırken kullanılır.
*   #### MAIL (E-posta Ayarları):

    **IS_VERIFICATION_REQUIRED**: E-posta doğrulama gerekip gerekmediğini belirten bir bayrak. Bu ayar, kullanıcıların hesaplarını doğrulamaları gerekip gerekmediğini kontrol eder.

    **MAIL_SERVICE**: E-posta hizmet sağlayıcısı (örneğin, Gmail).

    **MAIL_USER**: E-posta hizmetine erişim için kullanıcı adı.

    **MAIL_PASS**: E-posta hizmetine erişim için şifre.

*   #### DATABASE (Veritabanı Ayarları):

    **DATABASE_URL**: Veritabanına bağlanmak için kullanılacak bağlantı dizesi. Bu dize, veritabanı sunucusu, kullanıcı adı, şifre ve veritabanı adını içerir.

*   #### FACEBOOK (Facebook Kimlik Doğrulama Ayarları):

    **FACEBOOK_CLIENT_ID**: Facebook Kimlik Doğrulama için istemci kimliği.

    **FACEBOOK_CLIENT_SECRET**: Facebook Kimlik Doğrulama için istemci sırrı.

    **FACEBOOK_REDIRECT_URI**: Facebook kimlik doğrulama işlemi tamamlandığında kullanıcıyı yönlendireceğiniz URI.

*   #### GOOGLE (Google Kimlik Doğrulama Ayarları):

    **GOOGLE_CLIENT_ID**: Google Kimlik Doğrulama için istemci kimliği.

    **GOOGLE_CLIENT_SECRET**: Google Kimlik Doğrulama için istemci sırrı.

    **GOOGLE_REDIRECT_URI**: Google kimlik doğrulama işlemi tamamlandığında kullanıcıyı yönlendireceğiniz URI.

`ENV` ayarlarını yaptıktan sonra:
    `Sentinel/LoginPro/Prefabs/NetworkData` ScriptableObjesine sunucu bilgilerini giriniz.

Daha fazla strateji eklemek için: 
    [PassportJS](https://www.passportjs.org/docs/) dökümanını kontrol edin.

If you have more questions, suggestions for additions, or if you notice anything missing, you can reach us through the following links:

[Discord](https://discord.com/invite/ShG2erm9QQ)  
[Twitter](https://twitter.com/SentinelGa54657)  
[Website](https://sentinelasset.store)
