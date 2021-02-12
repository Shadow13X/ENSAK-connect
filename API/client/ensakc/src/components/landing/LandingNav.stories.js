import { withDesign } from 'storybook-addon-designs'
import MyLandingNav   from './LandingNav'


// Default Exports are for UI Metadata
export default {
    title: 'Layout/LandingNav',
    component: MyLandingNav,
    decorators: [withDesign],
};

// Named Exports are for individual components
export const myLandingNav = () => ({
    components: { MyLandingNav },
    template: '<MyLandingNav/>',
});

myLandingNav.storyName = 'Default'

myLandingNav.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NThUs7wmI0nYmBUOSxEU4J/FEE?node-id=65%3A0',
    },
}


/* Uncomment to add states for your stories
 export const State = Template.bind({});

 State.args = {
 ...ChildComponentStories.State.args,
 };
 */
