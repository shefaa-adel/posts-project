import { expect, test, vi } from "vitest";
import RegesterationForm from "../../regestration/RegesterationForm.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount form regestration component and it's emitting events", async () => {
  expect(RegesterationForm).toBeTruthy();

  const wrapper = mount(RegesterationForm, {
    global: {
      plugins: [Vuetify],
    },
  });

  wrapper.vm.$emit("save-user");
  wrapper.vm.$emit("save-user", {
    firstName: "shefaa",
    lastName: "adel",
    email: "shefaa@gmail.com",
    password: "123",
  });
  await wrapper.vm.$nextTick();

  expect(wrapper.emitted("save-user")).toBeTruthy();

  expect(wrapper.emitted("save-user")[1][0]).toStrictEqual({
    firstName: "shefaa",
    lastName: "adel",
    email: "shefaa@gmail.com",
    password: "123",
  });
});
