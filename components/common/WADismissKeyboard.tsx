import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

interface WADismissKeyboardProps {
  children: JSX.Element;
}

const WADismissKeyboard: React.FC<WADismissKeyboardProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default WADismissKeyboard;
