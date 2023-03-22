import { expect, test, vi } from "vitest";
import PostDetails from "../PostDetails.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount post details page", async () => {
  expect(PostDetails).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(PostDetails, {
      global: {
        plugins: [Vuetify],
      },
    });
  });
  it("navigates to the right page when btn clicked", async () => {
    const mockRouterPush = vi.fn();
    wrapper.vm.$router = {
      push: mockRouterPush,
    };
    await wrapper.find("v-btn").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
    expect(wrapper.vm.newComment).toEqual("");
  });

  it("renders data correctly", () => {
    expect(wrapper.find("v-btn").text()).toBe("Send");
  });
});
