import React from 'react';

import './styles.pcss'

const ContactModal = () =>
<div id="mailus" class="overlay">
  <div class="content">
  <div class="window popup">
  <div class="window-header"><span>Send message</span>
  </div>
    <div class="window-inner fe-form">
    <h2>Let's talk us!</h2>
    <h6>We usually respond within one hours.</h6>
    <form action="action-page.php">
        <input type="text" id="subject" name="subject" placeholder="Subject"></input>
        <input type="text" id="name" name="firstname" placeholder="Your name"></input>
        <input type="text" id="lastname" name="lastname" placeholder="Your last name"></input>
        <input type="text" id="email" name="email" placeholder="E-mail address"></input>
        <select id="type-user" name="type-user"></select>
        <option value="private">Private</option>
        <option value="company">Company</option>
        <textarea id="write" name="write" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit" class="butn"></input>
    </form>
    </div>
  </div>
</div>
</div>

export default ContactModal;
