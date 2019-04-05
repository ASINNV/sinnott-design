// Contact Form Functions (START)
// Contact Form Functions (START)

export const moveLabel = (e) => {
  if (e.target.id !== 'submit') {
    let target = e.target;
    let labels = document.getElementsByClassName('input-label');
    let inputs = document.getElementsByClassName('input-field');

    while (target.id === '') {
      target = target.parentNode;
    }

    // let currentID = Number(target.id.slice(6));
    let targetLabel = target.parentNode.childNodes[0];

    for (let i = 0; i < labels.length; i++) {
      if (inputs[i].value === '') {
        labels[i].style.transform = '';
        labels[i].style.color = '';
      }
    }

    targetLabel.style.transform = 'translateY(-10px) translateX(-15px)';
    targetLabel.style.color = '#fff';
    targetLabel.style.opacity = '1';
  }
};
export const returnLabels = () => {
  let labels = document.getElementsByClassName('input-label');
  let inputs = document.getElementsByClassName('input-field');

  for (let i = 0; i < labels.length; i++) {
    if (inputs[i].value === '') {
      labels[i].style.transform = '';
      labels[i].style.color = '';
    }
  }
};
export const sendForm = (e) => {
  let inputs = document.getElementsByClassName('input-field');
  let responseWindow = document.getElementById('response-window');
  let submitResponse = document.getElementById('submit-response');
  let submittedName= inputs[0].value;
  let submittedEmail = inputs[1].value;
  let submittedPhone = inputs[2].value;
  let submittedMessage = inputs[3].value;

  if (submittedName.length > 0 && submittedEmail.length > 0 && submittedPhone.length > 0 && submittedMessage.length > 0) {
    let submitButton = e.target;
    submitButton.style.pointerEvents = "none";

    let obJSON = {
      "Messages": [
        {
          "From": {
            "Email": "adrian@sinnottdesign.com",
            "Name": "Sinnott Design"
          },
          "To": [
            {
              "Email": "adrian@sinnottdesign.com",
              "Name": "Adrian Sinnott"
            }
          ],
          "Subject": "Sinnott Design Form",
          "TextPart": submittedName + " (" + submittedEmail + ", " + submittedPhone + ") submitted the following: " + submittedMessage,
          "HTMLPart": "<h4 style='font-size: 1.25em;'>Contact Information</h4><p>" + submittedName + "</p><p>" + submittedEmail + "</p><p>" + submittedPhone + "</p><br/><h4 style='font-size: 1.25em;'>Message</h4><p>" + submittedMessage + "</p>"
        }
      ]
    };
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obJSON)
    })
      .then(function(response) {
        // return response.json();
        submitResponse.style.color = "#00cccc";
        submitResponse.textContent = "Thank you! I'll be in touch.";
        responseWindow.style.display = 'flex';
        setTimeout(function() {
          responseWindow.style.opacity = '1';
        }, 25);
        submitButton.style.pointerEvents = "";
        setTimeout(function() {
          responseWindow.style.opacity = '0';
        }, 1525);
        setTimeout(function () {
          responseWindow.style.display = '';
        }, 1750);
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = '';
        }
      });
  } else {
    if (submitResponse.textContent !== "Missed a spot!") {
      submitResponse.textContent = "Missed a spot!";
    }
    submitResponse.style.color = "";
    responseWindow.style.display = 'flex';
    setTimeout(function() {
      responseWindow.style.opacity = '1';
    }, 25);

    setTimeout(function() {
      responseWindow.style.opacity = '';
    }, 1525);
    setTimeout(function() {
      responseWindow.style.display = '';
    }, 1750);
  }
};

// Contact Form Functions (END)
// Contact Form Functions (END)