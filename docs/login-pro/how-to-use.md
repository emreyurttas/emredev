How to use
----------

1. First of all, import LOGINPRO to your project

2. Then `Sentinel/LoginPro/Server/LoginProServer_source'.extract the `zip' archive from the zip.

3. On your computer [NodeJS](https://nodejs.org /) make sure it is installed

4. Go to the `LoginProServer_source` folder that you extracted and start `CMD` or `Terminal`.

5. Run the `npm install` command from the `CMD/Terminal`.


How is the ENV file set up?
------------------------------------------------------

**What is an ENV file?** : `.env`` file is the file where our environment variables are located, and we store our information here. For example: Server information, database information, SMTP information.

* ##### SERVER (Server Settings):

    **URL**: The URL that will be used when the server starts. This specifies which URL the application will run on.
    
    **PORT**: The port number from which the server will start. This specifies the port through which the application can be accessed.
    
    **JWT_SECRET** (Secret Key For JWT Authentication): The secret key to be used for JWT authentication. This key is used when creating and validating JWT tokens.
    
    **SESSION_SECRET** (Session Secret Key): The secret key to be used for session management. This is used when securing sessions.
* #### MAIL (Email Settings):

    **IS_VERIFICATION_REQUIRED**: A flag indicating whether email verification is required. This setting controls whether users need to verify their accounts.

    **MAIL_SERVICE**: Email service provider (for example, Gmail).

    **MAIL_USER**: The username for accessing the e-mail service.

    **MAIL_PASS**: The password for accessing the e-mail service.

* ##### DATABASE (Database Settings):

    **DATABASE_URL**: The connection string to be used to connect to the database. This string contains the database server, username, password, and database name.

* FACEBOOK (Facebook Authentication Settings) * #### FACEBOOK (Facebook Authentication Settings):

    **FACEBOOK_CLIENT_ID**: The client ID for Facebook Authentication.

    **FACEBOOK_CLIENT_SECRET**: Client secret for Facebook Authentication.

    **FACEBOOK_REDIRECT_URI**: The URI to which you will direct the user when the Facebook authentication process is completed.

* #### GOOGLE (Google Authentication Settings):

    **GOOGLE_CLIENT_ID**: The client ID for Google Authentication.

    **GOOGLE_CLIENT_SECRET**: Client secret for Google Authentication.

    **GOOGLE_REDIRECT_URI**: The URI to which you will direct the user when the Google authentication process is completed.

After making the 'ENV' settings:
    Enter the server information in the `Sentinel/LoginPro/Prefabs/NetworkData' scriptable folder.

To add more strategies: 
    [PassportJS](https://www.passportjs.org/docs /) check the document.

If you have more questions, suggestions for additions, or if you notice anything missing, you can reach us through the following links:

[Discord](https://discord.com/invite/ShG2erm9QQ)  
[Twitter](https://twitter.com/SentinelGa54657)  
[Website](https://sentinelasset.store)
