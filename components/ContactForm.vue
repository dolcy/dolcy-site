<template>
  <div class="contact-form">
    <form class="form-horizontal" method="POST" @submit.prevent="validateBeforeSubmit">
      <div class="form-group py-2">
        <div class="col-3 col-sm-12">
          <label class="form-label label-lg" for="fullName">Name<span class="required">*</span></label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            id="fullName"
            v-model="user.fullName"
            v-validate="'required'"
            name="fullName"
            class="form-input input-lg"
            type="text"
            placeholder="Please enter you full name."
          >
          <div class="pt-1">
            <span class="text-error">{{ errors.first('fullName') }}</span>
          </div>
        </div>
      </div>
      <div class="form-group py-2">
        <div class="col-3 col-sm-12">
          <label class="form-label label-lg" for="email">Email<span class="required">*</span></label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            id="email"
            v-model="user.email"
            v-validate="'required|email'"
            class="form-input input-lg"
            name="email"
            type="email"
            placeholder="Please enter your email."
          >
          <div class="pt-1">
            <span class="text-error">{{ errors.first('email') }}</span>
          </div>
        </div>
      </div>
      <div class="form-group py-2">
        <div class="col-3 col-sm-12">
          <label class="form-label label-lg" for="message">Project &amp; timeline<span class="required">*</span></label>
        </div>
        <div class="col-9 col-sm-12">
          <textarea
            id="message"
            v-model="user.message"
            v-validate="'required'"
            name="message"
            class="form-input input-lg"
            placeholder="Tell us about your project."
            rows="3"
          />
          <div class="pt-1">
            <span class="text-error">{{ errors.first('message') }}</span>
          </div>
        </div>
      </div>
      <div class="form-group py-2">
        <div class="col-3 col-sm-12">
          <label class="form-label label-lg">What's your budget?</label>
        </div>
        <div class="col-9 col-sm-12">
          <select v-model="user.budget" class="form-select select-lg">
            <option disabled value="">
              Please select...
            </option>
            <option>$20,000 or less</option>
            <option>$20,000-$60,000</option>
            <option>$60,000-$100,000</option>
            <option>$100,000+</option>
          </select>
        </div>
      </div>
      <div class="py-2">
        <button class="btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      user: {
        fullName: '',
        email: '',
        message: '',
        budget: ''
      }
    }
  },
  created: function () {
    return this.createDict()
  },
  methods: {
    validateBeforeSubmit() {
      const self = this
      self.$validator.validateAll().then((result) => {
        if (result) {
          // Send and reset form
          return self.sendData() && self.resetForm()
        }
      })
    },
    sendData() {
      const self = this
      const user = self.user
      // Set email optins
      const mailOptions = {
        from: '"Shaughn" <shaughn@dolcy.com>',
        to: 'sdolcy@gmail.com, shaughn@dolcy.com',
        subject: JSON.stringify(user.fullName) + 'submitted an inquiry from Dolcy Interactive.',
        text: 'NAME: ' + JSON.stringify(user.fullName) + ', EMAIL: ' + JSON.stringify(user.email) + ', MESSAGE: ' + JSON.stringify(user.message) + ', BUDGET: ' + JSON.stringify(user.budget),
        html: '<p><strong>Name: </strong>' + JSON.stringify(user.fullName) + '<p><strong>Email: </strong>' + JSON.stringify(user.email) + '</p>' + '<p><strong>Message: </strong>' + JSON.stringify(user.message) + '</p>' +
          '<p> <strong>Budget: </strong>' + JSON.stringify(user.budget) + '</p>'
      }

      const data = mailOptions
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      // Fetch data to contact api
      fetch('/api/contact', options)
        .then(() => {
          console.log('Sending clean email...')
        })
        .then(this.resetForm())
        .catch((err) => {
          console.log(err)
        })
    },
    createDict() {
      // Create custom error dictionary
      const dict = {
        custom: {
          email: {
            required: () => 'The email field is empty.',
            email: () => 'Please enter a valid email.'
          },
          fullName: {
            required: () => 'Please enter your full name.'
          },
          message: {
            required: () => 'Please enter some information about your project.'
          }
        }
      }
      // Localize the lang
      this.$validator.localize('en', dict)
    },
    resetForm() {
      console.log('Resetting user form.')
      // Clear all fields
      this.user.fullName = null
      this.user.email = null
      this.user.message = null
      this.user.budget = null
      this.$validator.reset()
      // Display thank you
      this.$notification.open({
        message: 'Form Submitted',
        description: 'Thank you for your inquiry! Our team will be in touch shortly to discuss your idea/project(s).',
        duration: 8
      })
    }
  }
}
</script>

<style scoped>

</style>
