# target的名字一般与你的项目名字相同
target 'RnToIos' do

  # 'node_modules'目录一般位于根目录中
  # 但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`
  pod 'React', :path => ‘./react/node_modules/react-native', :subspecs => [
    'Core',
    'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # 这个模块是用于调试功能的
    'BatchedBridge' # Include if RN >= 0.47
    # 在这里继续添加你所需要的模块
  ]
  # 如果你的RN版本 >= 0.42.0，则加入下面这行
  pod "Yoga", :path => "./react/node_modules/react-native/ReactCommon/yoga"

end
