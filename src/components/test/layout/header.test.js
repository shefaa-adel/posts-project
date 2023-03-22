import { expect, test, vi } from "vitest";
import Header from "../../layout/Header.vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

test("mount header component", async () => {
  expect(Header).toBeTruthy();
  beforeEach(() => {
    wrapper = mount(Header, {
      global: {
        plugins: [Vuetify],
      },
    });
  });
  it("navigates to the right page when clicked", async () => {
    const mockRouterPush = vi.fn();
    wrapper.vm.$router = {
      push: mockRouterPush,
    };

    await wrapper.find("v-btn").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(5);
    expect(mockRouter.push).toHaveBeenCalledWith("/posts");
    expect(mockRouter.push).toHaveBeenCalledWith("/users");
    expect(mockRouter.push).toHaveBeenCalledWith("/regester");
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
    expect(mockRouter.push).toHaveBeenCalledWith("/logout");
  });

  it("renders data correctly", () => {
    expect(wrapper.find("v-list-item").text()).toBe("Posts");
    expect(wrapper.find("v-list-item").text()).toBe("Users");
  });
});
