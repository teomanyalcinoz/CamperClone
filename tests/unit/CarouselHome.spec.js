import { mount } from "@vue/test-utils";
import carouselhome from "@/components/CarouselHome.vue"

describe('CarouselHome.vue', () => {
    it('height prop 100% olmasi gerek', () => {
        const wrapper = mount(carouselhome);
        const carosel = wrapper.find('#caro');
        expect(carosel.attributes()['height']).toBe('600');
    });

});