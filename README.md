# Vue2 Flash 
A Vue2 Flash Helpful Notification.

#Demo
http://vueflash.sagaryonjan.com.np/

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
this.$flash.success().created(); 
this.$flash.success().created({
   title : 'User',
  group: 'user-group' // group must be called in component to render
}); 
```

and add this component where ever you want to display.
``` bash  
 <flash-float></flash-float> // this will display in top right area
 <flash></flash> // this is normal like bootstrap alert
```

#Features :
``` bash  
 this.$flash.success({
     group: this.component,
     message: this.message,
     notify_type: 'push'
 });

 this.$flash.success('User Created Successfully');
 
 this.$flash.warning({
     group: 'group',
     message: 'User Warning !!',
     notify_type: 'push'
 });

 this.$flash.warning('User Warning !!');
 
 this.$flash.danger({
     group: 'group',
     message: 'User Danger !!',
     notify_type: 'push'
 });

 this.$flash.danger('User Danger');
 
  this.$flash.info({
      group: 'group',
      message: 'User Info !!',
      notify_type: 'push'
  });
 
  this.$flash.danger('User Info');
```

you can also normally call
``` bash
    this.$flash.notify('success', {
        group: 'group-name',
        message: 'User Created Successfully',
        notify_type: 'push'
    });
    
    this.$flash.notify('success', 'User Created Successfully');
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
| animation | String  | ''     | animation type: fade,slide |
| title     | String,Boolean  | true     | false for hiding title or overwrite with title |

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
  1.this.$flash.success().created();
  2.this.$flash.success().saved();
  3.this.$flash.success().updated();
  4.this.$flash.success().deleted();
  
  #Warning
  1.this.$flash.warning().accessDenied();
  2.this.$flash.warning().invalidRequest();
  
  #Danger
  1.this.$flash.danger().createdFailed();
  2.this.$flash.danger().savedFailed();
  3.this.$flash.danger().updatedFailed();
  4.this.$flash.danger().deletedFailed();
 
 ```
 
 You can also create your own method. If you want to create notify message
 which you will use many time as your app grow. Let assume you want to notify
  if some one is not authorized than :
``` bash
Verstion : 1.0.4
Vue.use(VueFlash, {
    predefine_msg: {
        unauthorized : {
            message: 'You are not authorized',
            type: 'warning'
        },
        proccess : {
            message: 'You are not proccessed',
            type: ['warning', 'describe'] // two types in array
        }
    },
    type: {
        describe : {
            flash_float : {
                color: '#ffffff',
                background: 'yellow'
            },

            vue_flash : {
                borderColor: '#bce8f1',
                color: 'green',
                backgroundColor: 'yellow'
            }

        }
    },
});

this.$flash.warning().unauthorized();
this.$flash.describe().proccess();

 ```

You can also use push function. It is going to push the data and set default value. So when you
are working with spa and you want to send alert notification into another route in another 
component than you can use push which is going to set the default value.
``` bash
VERSION: 1.0.4
/*this.$flash.push('success', {
    group: 'group',
    message: 'Hello Message',
});*/

//Feature 4
//this.$flash.push('success', 'Hello Success Message'); 
 ```
 
 you can also push in :

``` bash
VERSION: 1.0.4
this.$flash.success().created('push'); 
this.$flash.success().saved('push'); 
this.$flash.success().updated('push');  
 ``` 
 
 When you use created function than it is going to send 

``` bash
message: Data Created Successfully. 
 ```   

 So if you want to update that data into User 
 than you can call 

``` bash
VERSION: 1.0.4
this.$flash.success().created('User');    
 ```   
 
 If you also want to push than 
 ``` bash
 
 VERSION: 1.0.4
 this.$flash.success().created({
   type : 'push'
   title : 'User',
   group: 'user-group' // group must be called in component to render
  });
 
 addtional attribute
 You can also updated the message using message property. 
  ```   
  
  #Browser
  Include the script file, then install the component with Vue.use(VueFlash); e.g.:
  ``` bash
  <script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
  <script type="text/javascript" src="node_modules/vue-clock-simple/dist/vue-flash.min.js"></script>
  <script type="text/javascript">
    Vue.use(VueFlash);
  </script>
  ```   
  #Module
  ``` bash
  import VueFlash from 'vue-flash';
  ```
  
  You can test it in development with: 
  # Run tests
  ``` bash
  npm run test
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
