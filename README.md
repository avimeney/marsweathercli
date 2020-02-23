# Mars Weather Web Client

The Mars Weather Web Client is a web application for displaying the last temperature measurements at the surface of planet Mars.

The application is implemented using [Angular JS][1] and relies on the [Mars Weather REST Service][2] for data acquisition.

## Installation

The application is composed only of HTML and JavaScript files, therefore, no build process is required, and it can be promptly deployed on any regular Web server.

Get all the artifacts by cloning this repository and deploy the downloaded files on your Web server. Check your Web server's user guide for specific deployment instructions.


```
git clone https://github.com/avimeney/marsweathercli.git
```

### Configuration

As mentioned before, this Web interface depends on the Mars Weather REST Service to work properly. The configuration process consists basically in adjusting the proper Mars Weather REST Service URL. Once the client has been installed, search for and edit the following file:

```
/js/constants/AppConst.js
```

The value for the ``APP_BASE_PATH`` key must match the URL of REST Service the Web client is supposed to connect to. If you have a default REST Service installation it is ``http://localhost:8080/marsweather`` and no modification is needed. If not, adjust the URL accordingly.

Finally, if by any chance, you have modified the default authorization token in your server setup, adjust the ``AUTH_TOKEN`` key accordingly.

## Support

You need any help using this application please contact me at [avimeney@gmail.com](mailto:avimeney@gmail.com).

[1]: https://angularjs.org/
[2]: https://github.com/avimeney/marsweather
