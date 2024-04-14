document.getElementById('showLoginForm').addEventListener('click', function() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
});

// Show Signup Form and Hide Login Form
document.getElementById('showSignupForm').addEventListener('click', function() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
});


function getReading() {
  const lifeLine = document.getElementById("lifeLineSelect").value;
  const heartLine = document.getElementById("heartLineSelect").value;
  const headLine = document.getElementById("fateLineSelect").value;
  const fateLine = document.getElementById("headLineSelect").value;

  const readings = [
    "You have a strong vitality and a never-give-up attitude in life.",
    "You may face challenges in maintaining your vitality, but you can overcome them with determination.",
    "Your vitality is average, and you have a balanced approach to life."
  ];

  const relationships = [
    "You are romantic, expressive, and cooperative in relationships.",
    "You may struggle with expressing emotions or lack interest in romance.",
    "You have an average approach to relationships and emotions."
  ];

   const career = [
    "You are likely to have fortune and luck in career matters.",
    "You may face obstacles or disappointments in career or financial matters.",
    "Your career path may have a balanced mix of successes and challenges."
  ];

   const thinking = [
    "You possess clear thinking, intelligence, and decisiveness.",
    "You might experience difficulties in focusing and have impulsive tendencies.",
    "Your thinking is average, and you tend to make decisions based on practicality."
  ];


  const reading = [
    readings[lifeLine],

    relationships[heartLine],
    
    career[fateLine],
    
    thinking[headLine]

  ].join("<br>");

  document.getElementById("readingResult").innerHTML = "Based on your selections, here is your palm line reading: <br>" + reading;
}

