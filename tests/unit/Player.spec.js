import { mount } from "@vue/test-utils";
import Player from "@/components/Player.vue"


describe('Player.vue', () => {
    it('should renders tws text', () => {
        const wrapper = mount(Player);
        const todo = wrapper.get('[data-test="tws"]');
        expect(todo.text()).toBe("The Walking Society");
    });
});
