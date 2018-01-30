# Vue2 Flash 
A Vue2 Flash Helpful Notification.

#Demo
http://vueflash.sagaryonjan.com.np/

#Learn Full Documentation
http://www.intactcode.com/2018/01/use-vue2-flash/

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
// predefine message called
this.$flash.success().created();  // Data created successfully

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

you can also normally call
``` bash
    this.$flash.notify('success', {
        group: 'group-name',
        message: 'User Created Successfully'
    });
    
    this.$flash.notify('success', 'User Created Successfully');
```
U can define group to render notification you can add prop group in notification like :
``` bash
    //Group Prop must be string
    <flash :group="'group-name'"></flash>
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
  import VueFlash from 'vue2-flash';
  ```
  
  You can test it in development with: 
  # Run tests
  ``` bash
  npm run test
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
