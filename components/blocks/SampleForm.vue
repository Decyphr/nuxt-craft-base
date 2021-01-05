<template>
  <form v-if="length === 'short'" method="POST" action="">
    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--text">
        <label class="freeform-label">First Name</label>
        <input name="firstName" type="text" class="freeform-input" />
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--email">
        <label class="freeform-label freeform-required">Email</label>
        <input name="email" type="email" class="freeform-input" required />
      </div>
    </div>

    <div class="freeform-row">
      <div
        class="freeform-column freeform-column-content-align-left freeform-field-type--submit"
      >
        <button type="submit" name="form_page_submit">Submit</button>
      </div>
    </div>
  </form>
  <form v-else method="POST" action="">
    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--text">
        <label class="freeform-label">First Name</label>
        <input name="firstName" type="text" class="freeform-input" />
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--email">
        <label class="freeform-label freeform-required">Email</label>
        <input name="email" type="email" class="freeform-input" required />
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--select">
        <label class="freeform-label freeform-required">State</label>
        <div class="custom-select">
          <select name="state" class="freeform-input">
            <option value="" selected>Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--checkbox_group">
        <label class="freeform-label freeform-required">Favorite Colors</label>
        <label class="custom-checkbox"
          ><input
            name="favoriteColors[]"
            type="checkbox"
            class="freeform-input"
            value="Red"
          /><span>Red</span></label
        >
        <label class="custom-checkbox"
          ><input
            name="favoriteColors[]"
            type="checkbox"
            class="freeform-input"
            value="Blue"
          /><span>Blue</span></label
        >
        <label class="custom-checkbox"
          ><input
            name="favoriteColors[]"
            type="checkbox"
            class="freeform-input"
            value="Yellow"
          /><span>Yellow</span></label
        >
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--radio_group">
        <label class="freeform-label freeform-required"
          >Contact Preference</label
        >
        <label class="custom-radio"
          ><input
            name="contactPreference"
            type="radio"
            class="freeform-input"
            value="Email"
          /><span>Email</span></label
        >
        <label class="custom-radio"
          ><input
            name="contactPreference"
            type="radio"
            class="freeform-input"
            value="Phone"
          /><span>Phone</span></label
        >
        <label class="custom-radio"
          ><input
            name="contactPreference"
            type="radio"
            class="freeform-input"
            value="Mail"
          />
          <span
            >Radio button with a really long label. Radio button with a really
            long label. Radio button with a really long label.</span
          >
        </label>
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--textarea">
        <label class="freeform-label">Message</label>
        <textarea name="message" class="freeform-input" rows="5"></textarea>
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--file">
        <label class="freeform-label">Attachment</label>
        <input name="attachment" type="file" class="freeform-input" />
      </div>
    </div>

    <div class="freeform-row">
      <div class="freeform-column freeform-field-type--checkbox">
        <label class="freeform-label freeform-input-only-label">
          <div class="custom-checkbox">
            <input name="signUpForNewsletter" type="hidden" />
            <input
              name="signUpForNewsletter"
              type="checkbox"
              class="freeform-input"
              value="1"
            />
            <span>Sign up for newsletter</span>
          </div>
        </label>
      </div>
    </div>

    <div class="freeform-row">
      <div
        class="freeform-column freeform-column-content-align-left freeform-field-type--submit"
      >
        <button type="submit" name="form_page_submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SampleForm",
  props: {
    length: { type: String, default: "", required: false },
  },
};
</script>
