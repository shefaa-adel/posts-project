import { expect, test } from "vitest";
import PageNotFound from "../PageNotFound.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount page not found page", async () => {
  expect(PageNotFound).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(PageNotFound, {
      global: {
        plugins: [Vuetify],
      },
    });
  });
  it("renders a home btn", () => {
    expect(wrapper.find("v-btn").text()).toBe("GO HOME");
  });
});
