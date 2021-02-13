import { withDesign }       from 'storybook-addon-designs'
import MyLandingBannerTimer from './LandingBannerTimer'


// Default Exports are for UI Metadata
export default {
    title: 'Layout/LandingBannerTimer',
    component: MyLandingBannerTimer,
    decorators: [withDesign],
};

// Named Exports are for individual components
export const myLandingBannerTimer = () => ({
    components: { MyLandingBannerTimer },
    template: '<MyLandingBannerTimer/>',
});

myLandingBannerTimer.storyName = 'LandingBannerTimer'

myLandingBannerTimer.parameters = {
    design: {
        type: 'figma',
        url: '',
    },
}


/* Uncomment to add states for your stories
 export const State = Template.bind({});

 State.args = {
 ...ChildComponentStories.State.args,
 };
 */
