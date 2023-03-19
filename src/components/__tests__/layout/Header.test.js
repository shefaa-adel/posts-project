import { describe, it, expect,test } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../../layout/header/Header.vue'

describe("Header.vue", () => {

    test("Search button clicked", async () => {
        expect(Header).toBeTruthy();
     
        const wrapper = mount(Header);
        const ac = await wrapper.get("base-button").trigger("click")
        expect(wrapper.vm.input).toEqual("")
     })
    
});