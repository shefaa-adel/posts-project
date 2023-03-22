import { expect, test } from "vitest";
import AllPosts from "../AllPosts.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";
import PostsComponent from "../../components/posts/PostsComponent.vue";
import PostSearching from "../../components/posts/PostSearching.vue";
import Cover from "../../components/ui/Cover.vue";

test("mount page not found page", async () => {
  expect(AllPosts).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(AllPosts, {
      global: {
        plugins: [Vuetify],
      },
    });
  });
  it("contains correct content", () => {
    expect(wrapper.findComponent(Cover)).toBeTruthy();
    expect(wrapper.findComponent(PostSearching)).toBeTruthy();
    expect(wrapper.findComponent(PostsComponent)).toBeTruthy();
  });
});
