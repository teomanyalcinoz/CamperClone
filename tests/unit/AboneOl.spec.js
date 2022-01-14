import { mount } from "@vue/test-utils";
import AboneOl from "@/components/AboneOl.vue"


describe('AboneOl.vue', () => {
    it('renders profile link', () => {
        const wrapper = mount(AboneOl, {
            data() {
                return {
                    isLoggedin: true,
                };
            }
        });
        const proflink = wrapper.get('#profile');
        expect(proflink.text()).toEqual("my profile");
    });


    it('should not renders profile link', () => {
        const wrapper = mount(AboneOl, {
            data() {
                return {
                    isLoggedin: false,
                };
            }
        });
        const proflink = wrapper.find('#profile');
        expect(proflink.exists()).toBe(false);
    });
});