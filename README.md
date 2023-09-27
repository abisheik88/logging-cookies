<h1>Logging and Cookies</h1>

<h4>Logger:</h4>

- Nest js comes with built-in logger functionality, it normally starts when application bootstraps.

- It is also used for catching Errors with different to normal logging using specially provided color code for each thing.

<h5>Behaviours of Logging:</h5>

<li>disabling the logging completely.</li>
<li>Specify the log level detail.</li>
<li>override the timestamp in logger</li>
<li>override the default logger</li>
<li>Make use of dependency injection to simplify composing</li>

<h6>Disabling the logging:</h6>

- To disable the logging which is done through it by decalring globally in main.ts file,

<code>
const app = await NestFactory.create(AppModule, {
  logger: false,
});
await app.listen(3000);
</code>

- By mentioning the logger property to false we can completely neglect the default logging.

- If we want to display only the warning message or if we want to display only the error logging messages. This can be customised by

<code>
const app = await NestFactory.create(AppModule, {
  logger: ['warn','error'],
});
await app.listen(3000);
</code>

- In the above logger we just mentioned what logger messages are to be printed in the console. Here we mentioned only warning and error messages to be present.

- Similarly, we also have some other properties they are debug,error,fatal,verbose,warn,log.

- These properties are used for every specific occasions

<p color:red><b>Debug:</b> Normally debug is used to debug the flow of application</p>
<p><b>Warn:</b> The warn is used for non-crictical issues but it needs attention</p>
<p><b>Error:</b> It is used for actual errors or exceptions</p>
<p><b>Fatal:</b> The fatal is used for extremely crictical issues</p>
<p><b>Verbose:</b> It is normally used for detailed logs in production</p>
<p><b>Log:</b> It is used for general purpose logging</p>

<h4>Custom Logger</h4>

- when we set the logger in main.ts to console. It logs every message in terminal as a very normal message.

- To create a custom logger we have to customlogger.ts , Here we just create a custom logger file which implements LoggerService which comes from @nestjs/common.

-then we can import them in providers and use it to use them as a custom logger.
