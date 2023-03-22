import { expect, test } from "vitest";
import PostSearching from "../../posts/PostSearching.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount Post searching component", async () => {
  expect(PostSearching).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(PostSearching, {
      global: {
        plugins: [Vuetify],
      },
      props: {
        searchInput: "test input",
      },
    });
  });
  it("renders props correctly", () => {
    expect(wrapper.text()).toContain("test input");
  });
});
