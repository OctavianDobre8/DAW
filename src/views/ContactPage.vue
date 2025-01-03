<template>
  <div class="contact-container">
    <h1 class="contact-title">Contact Us</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-input"
          placeholder="Your name"
        />
        <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-input"
          placeholder="your.email@example.com"
        />
        <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="subject" class="form-label">Subject</label>
        <select id="subject" v-model="form.subject" class="form-select">
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
        <span v-if="errors.subject" class="form-error">{{ errors.subject }}</span>
      </div>

      <div class="form-group full-width">
        <label for="message" class="form-label">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-textarea"
          rows="5"
          placeholder="Your message here..."
        ></textarea>
        <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
      </div>

      <div class="form-group checkbox-group">
        <input
          type="checkbox"
          class="form-checkbox"
          id="newsletter"
          v-model="form.newsletter"
        />
        <label class="checkbox-label" for="newsletter">
          Subscribe to our newsletter
        </label>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import * as yup from 'yup';
import '../style/contact.css';

export default {
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    });

    const errors = ref({});

    const schema = yup.object({
      name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
      email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      subject: yup.string()
        .required('Please select a subject'),
      message: yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message must not exceed 500 characters'),
      newsletter: yup.boolean()
    });

    const submitForm = async () => {
      try {
        errors.value = {};
        await schema.validate(form, { abortEarly: false });
        alert('Form submitted successfully!');
        Object.keys(form).forEach(key => {
          if (typeof form[key] === 'boolean') {
            form[key] = false;
          } else {
            form[key] = '';
          }
        });
      } catch (error) {
        if (error.inner) {
          error.inner.forEach((err) => {
            errors.value[err.path] = err.message;
          });
        }
      }
    };

    return { form, errors, submitForm };
  },
};
</script>