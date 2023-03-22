import { expect, test } from "vitest";
import PostItem from "../../posts/PostItem.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount Post item component", async () => {
  expect(PostItem).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(PostItem, {
      global: {
        plugins: [Vuetify],
      },
      props: {
        title: "sunt aut facere",
        img: "../../../assets/images/post1.jpg",
        id: "3",
        userId: "2",
      },
    });
  });
  it("renders a post title", () => {
    expect(wrapper.text()).toContain("sunt aut facere");
  });

  it('renders ui correctly', () => {
    expect(wrapper.find('v-btn').text()).toBe('Read more');
  });
});
