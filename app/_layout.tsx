import { Stack } from "expo-router";
import { View } from "react-native";
import { BackgroundWrapper } from "@/components/background-wrapper";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <BackgroundWrapper>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </BackgroundWrapper>
    </View>
  );
}
