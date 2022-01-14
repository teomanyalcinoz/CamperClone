import { mount } from "@vue/test-utils";
import AboneOl from "@/components/AboneOl.vue"

describe('AboneOl.vue', () => {
    it('show modal ', () => {
        const onClose = jest.fn()
        const wrapper = mount(AboneOl, {
            propsData: {
                onClose
            }
        });

        wrapper.find('#jest').trigger('click')
        expect(onClose).toHaveBeenCalled()
    });

});