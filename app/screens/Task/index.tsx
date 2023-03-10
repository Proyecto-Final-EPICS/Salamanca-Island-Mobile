import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import Introduction from './screens/Introduction';
import PreTask from './screens/PreTask';
import DuringTask from './screens/DuringTask';
import PosTask from "./screens/PosTask";
import Header from './components/Header';

import useTaskContext from '@hooks/useTaskContext';

const Stack = createNativeStackNavigator();

const Task = ({ route }: { route: any }) => {
    const { taskOrder } = route.params;
    const { phaseCompleted, onPressNext, progress, setPhaseCompleted } = useTaskContext();

    const optionsPrimary: NativeStackNavigationOptions = {
        animation: "slide_from_right",
        headerBackVisible: false,
        headerTitleStyle: {
            fontFamily: "Poppins-Regular",
        },
        header: () => <Header progress={progress} showNext={phaseCompleted} onPress={() => {
            setPhaseCompleted(false);
            onPressNext();
        }} icon="closecircle" />
    }

    return (
        <>

            {/* TODO - Change this later */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Introduction"
                    options={{
                        ...optionsPrimary,
                    }}
                    initialParams={{
                        taskOrder: taskOrder,
                    }}
                    component={Introduction}
                />
                <Stack.Screen
                    name="PreTask"
                    options={{
                        ...optionsPrimary
                    }}
                    initialParams={{
                        taskOrder: taskOrder,
                        linkOrder: 0,
                    }}
                    component={PreTask}
                />
                <Stack.Screen
                    name="DuringTask"
                    options={{
                        ...optionsPrimary,
                        headerShown: false
                    }}
                    initialParams={{
                        taskOrder: taskOrder,
                    }}
                    component={DuringTask}
                />
                <Stack.Screen
                    name="PosTask"
                    options={{
                        ...optionsPrimary
                    }}
                    initialParams={{
                        taskOrder: taskOrder,
                        questionOrder: 1,
                    }}
                    component={PosTask}
                />
            </Stack.Navigator>
        </>
    )
}

export default Task