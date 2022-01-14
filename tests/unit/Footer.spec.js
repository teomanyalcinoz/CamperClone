import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue"


describe('Footer.vue', () => {
    it('renders when message contains in text', () => {
        const wrapper = mount(Footer, {
            props: {
                msg: "Camper",
            },
        });
        expect(wrapper.text()).toContain("Camper");
    });
});
