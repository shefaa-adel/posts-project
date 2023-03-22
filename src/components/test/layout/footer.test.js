import { expect, test } from "vitest";
import Footer from "../../layout/Footer.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount footer component", async () => {
  expect(Footer).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(Footer, {
      global: {
        plugins: [Vuetify],
      },
    });
  });
  it('renders data correctly', () => {
    expect(wrapper.find('p').text()).toBe('Read The Latest And Greatest From Our Experts');
  });
});
