###page design
top-mid-bottom
```javascript
        <div class="store"></div>
        <ul class="course-list">
            <li class="course"></li>
        </ul>
        <div class="control"></div>
```
```javascript
 <input type="checkbox" class="select-all" @click="selectAll" v-model="Allchecked">
 //this part is the most important part. it's diff to teacher's idea.
 //also influence the autoAllSelect() method