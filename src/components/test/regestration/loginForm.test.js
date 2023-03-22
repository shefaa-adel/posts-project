import { expect, test, vi } from "vitest";
import LogInForm from "../../regestration/LogInForm.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount form login component and it's emitting events", async () => {
  expect(LogInForm).toBeTruthy();
 
    const wrapper = mount(LogInForm, {
      global: {
        plugins: [Vuetify],
      },
    });

  wrapper.vm.$emit("login-user");
  wrapper.vm.$emit("login-user", {
    email: "shefaa@gmail.com",
    password: "123",
  });
  
  await wrapper.vm.$nextTick()

  expect(wrapper.emitted()['login-user']).toBeTruthy()
  expect(wrapper.emitted('login-user')[1][0]).toStrictEqual({
    email: "shefaa@gmail.com",
    password: "123",
  })

  it('renders data correctly', () => {
    expect(wrapper.find('p').text()).toBe('Please fix errors and try again..');
  });

});
