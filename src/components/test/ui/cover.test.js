import { expect, test } from "vitest";
import Cover from "../../ui/Cover.vue";
import { mount } from "@vue/test-utils";

test("mount cover component", async () => {
  expect(Cover).toBeTruthy();

  const wrapper = mount(Cover, {
    props: {
      coverTxt: "this is cover section",
    },
  });
  expect(wrapper.text()).toContain("this is cover section");
});
