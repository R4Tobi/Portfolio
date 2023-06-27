<template>
  <div class="contact">
    <form class="form">
      <h2>Kontaktformular</h2>
      <p type="Name:"><input placeholder="Name" v-model="name" required/></p>
      <p type="Email:"><input placeholder="E-Mail" v-model="email" required/></p>
      <p type="Betreff:"><input placeholder="Betreff" v-model="subject" required/></p>
      <p type="Message:"><textarea placeholder="Nachricht..." v-model="message" required></textarea></p>
      <button type="submit">Senden</button>
      <div>
        <span class="fa fa-phone"></span>+49 176 34910174
        <span class="fa fa-envelope-o"></span> info@tobe-websolutions.de
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      // Prepare the data to send
      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      // Send data to the server
      fetch("/php/sendMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log(data); // You can handle success/failure here
          // Reset the form after successful submission
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";
        })
        .catch((error) => {
          console.error(error);
          // Handle the error case here
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/main.scss";

.contact {
  width: 100%;
  .form {
    width: 340px;
    height: 440px;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px #000;
    margin: calc(50vh - 220px) auto;
    padding: 20px 30px;
    box-sizing: border-box;
    position: relative;
  }
  h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 180px;
    color: #78788c;
    border-bottom: 3px solid #78788c;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    transition: all 0.3s;
    border-bottom: 2px solid #bebed2;
  }
  input:focus,
  textarea:focus {
    border-bottom: 2px solid #78788c;
  }
  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a;
  }
  button {
    float: right;
    padding: 8px 12px;
    margin: 8px 0 0;
    border: 2px solid #78788c;
    background: 0;
    color: #5a5a6e;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background: #78788c;
    color: #fff;
  }
  div {
    content: "Hi";
    position: absolute;
    bottom: -15px;
    right: -20px;
    background: #50505a;
    color: #fff;
    width: 320px;
    padding: 16px 4px 16px 0;
    border-radius: 6px;
    font-size: 13px;
    box-shadow: 10px 10px 40px -14px #000;
  }
  span {
    margin: 0 5px 0 15px;
  }
}
</style>
