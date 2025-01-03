<!-- src/views/Contact.vue -->
<template>
  <div>
    <h1 class="text-center">Contact Us</h1>
    <form @submit.prevent="submitForm" class="p-4 bg-light border rounded">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-control"
        />
        <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-control"
        />
        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import * as yup from 'yup';

export default {
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
    });

    const errors = ref({});

    const schema = yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
    });

    const submitForm = async () => {
      try {
        errors.value = {};
        await schema.validate(form, { abortEarly: false });
        alert('Form submitted successfully!');
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
