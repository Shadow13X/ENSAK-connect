import { withDesign }  from 'storybook-addon-designs'
import MyLandingBanner from './LandingBanner'


// Default Exports are for UI Metadata
export default {
    title: 'Layout/LandingBanner',
    component: MyLandingBanner,
    decorators: [withDesign],
};

// Named Exports are for individual components
export const myLandingBanner = () => ({
    components: { MyLandingBanner },
    template: '<MyLandingBanner/>',
});

myLandingBanner.storyName = 'Default'

myLandingBanner.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NThUs7wmI0nYmBUOSxEU4J/FEE?node-id=32%3A2',
    },
}


/* Uncomment to add states for your stories
 export const State = Template.bind({});

 State.args = {
 ...ChildComponentStories.State.args,
 };
 */
