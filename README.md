# Vue2 Flash 
A Vue2 Flash Helpful Notification.

# Install
``` bash
npm install vue2-flash
```

# In App main.js

```bash
import Vue from 'vue';
import VueFlash from 'vue2-flash';
Vue.use(VueFlash);
```

now you can simply call this
``` bash
this.$flash.success.created(); //this will render message Data Created Successfully.
```

and add this component where ever you want to display.
``` bash  
 <flash-float></flash-float> // this will display in top right area
 <flash></flash> // this is normal like bootstrap alert
```

and add this component where ever you want to display.
``` bash  
 <flash-float></flash-float> // this will display in top right area
 <flash></flash> // this is normal like bootstrap alert
```

you can also normally call
``` bash
    this.$flash.notify(type, message, group = defaults.notify_group ); 
   //type: success,
   //message: 'Data Created Successfully',
   //group: 'user-create'
```
U can define group to render notification you can add prop group in notification like :
``` bash
    //Group Prop must be string
    <flash :group="'user-create'"></flash>
```
### Props

All props are optional.

| Name      | Type    | Default         | Description |
| ---       | ---     | ---             | ---         |
| group     | String  | 'sy-vue-notify' | group name for component which will be render when called |
| duration  | Number  | 4000            | Component will hide after  4000|
| classes   | String  | 'sy-vue-notify' | Add you class |
| animation | String  | 'top-right'     | animation type: fade,slide |

In <flash-float></flash-float> there is addition component
``` bash
 name :area
 type : String
 default: 'top-right' 
 Area type :
 a. right :  top-right, middle-right, down-right,
 b. middle : top-middle, middle, down-middle
 c. left : top-left, middle-left, down-left
 ```
 
 Additional Functionality 
 ``` bash
 #Success 
 1.this.$flash.success.created();
 2.this.$flash.success.saved();
 3.this.$flash.success.updated();
 4.this.$flash.success.deleted();
 
 #Warning
 1.this.$flash.warning.accessDenied();
 2.this.$flash.warning.invalidRequest();
 
 #Info
 1.this.$flash.info.welcome();
 
 #Danger
 1.this.$flash.danger.createdFailed();
 2.this.$flash.danger.savedFailed();
 3.this.$flash.danger.updatedFailed();
 4.this.$flash.danger.deletedFailed();

 ```
 
 You can also create your own method. If you want to create notify message
 which you will use many time as your app grow. Let assume you want to notify
  if some one is not authorized than :
``` bash
 let options =  {
                warning: {
                    'unauthorized' : "You are not authorized"
                },
            };
            
 you can add warning,info,danger,success           
 
 Vue.use(VueFlash, options);
 
 // now you can call
 this.$flash.warning.accessDenied();
 
 ```
 
 
## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
