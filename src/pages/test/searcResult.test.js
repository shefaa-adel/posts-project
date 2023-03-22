import { expect, test } from "vitest";
import SearchResult from "../SearchResult.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount search result page", async () => {
  expect(SearchResult).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(SearchResult, {
      global: {
        plugins: [Vuetify],
      },
      props: {
        input: "test input",
      },
    });
  });
  it("renders props correctly", () => {
    expect(wrapper.text()).toContain("test input");
  });
});
