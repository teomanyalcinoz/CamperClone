import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe('Home.vue', () => {
    it('parent child', () => {
        const wrapper = mount(Home)
        expect(wrapper.text()).toContain("Outdoor");
    });
});