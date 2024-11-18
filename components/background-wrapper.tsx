import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
  onLayout?: () => Promise<void>;
}

export function BackgroundWrapper({
  children,
  onLayout,
}: BackgroundWrapperProps) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/images/bg-image.jpg")}
        style={{ flex: 1 }}
        onLayout={onLayout}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
