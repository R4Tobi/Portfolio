<template>
  <div>
    <article>
      <h1>Impressum</h1>
      <h2>Angaben gem. § 5 TMG:</h2>
      To Be Web Solutions i.G.
      <br />
      Einzelunternehmen
      <br />
      <br />
      <strong>Vertreten durch:</strong>
      <br />
      Tobias Baake
      <br />
      Am Randel 46
      <br />
      39218 Schönebck
      <br />
      <br />
      <strong>Umsatzsteuer-ID gem. § 27a UStG:</strong>
      <br />
      DE
      <br />
      <h2>Kontakt:</h2>
      E-Mail:
      <a href="mailto:info@tobe-websolutions.de">info@tobe-websolutions.de</a>
      <br />
      Telefonnummer:
      <a href="tel:+4917634910174">+49 176 34910174</a>
      <br />
      www.tobe-websolutions.de
      <br />
      <h2>Inhaltlich Verantwortlicher</h2>
      Tobias Baake
      <br />
      o.g. Kontaktdaten
    </article>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Impressum",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/main.scss";
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1{
    font-size: 32px;
    text-decoration: underline;
  }

  article {
    width: 360px;
    display: block;
    text-align: left;
    h2{
        color: rgba(255, 255, 255, 0.534);
        margin-bottom: 5px;
    }
  }
}
</style>
