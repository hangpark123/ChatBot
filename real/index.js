const express = require("express");
const app = express();
const { WebhookClient } = require("dialogflow-fulfillment");
const port = 8080;
app.use(express.json());

app.post("/", express.json(), (req, res) => {
  const request = req.body;
  const response = {
        fulfillmentText: "This is a text response",
        fulfillmentMessages: [
          {
            card: {
              title: "card title",
              subtitle: "card text",
              imageUri: "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
              buttons: [
                {
                  text: "button text",
                  postback: "https://assistant.google.com/"
                }
              ]
            }
          }
        ],
        source: "example.com",
        payload: {
          google: {
            expectUserResponse: true,
            richResponse: {
              items: [
                {
                  simpleResponse: {
                    textToSpeech: "this is a simple response"
                  }
                }
              ]
            }
          },
          facebook: {
            text: "Hello, Facebook!"
          },
          slack: {
            text: "This is a text response for Slack."
          }
        },
        outputContexts: [
          {
            name: "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
            lifespanCount: 5,
            parameters: {
              param: "param value"
            }
          }
        ],
        followupEventInput: {
          name: "event name",
          languageCode: "en-US",
          parameters: {
            param: "param value"
          }
        }
  };

  res.json(response);
});

app.listen(port, () => {
});