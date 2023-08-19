---


---

<h2 id="how-to-use">How to use</h2>
<p>Using this asset is very simple; you can call only a single function.</p>
<pre><code>CmdXpert.AddNewCommand("your_commend", x =&gt; YourFunction());
</code></pre>
<p><img src="./img/your_commend_1.png" alt="Schema"></p>
<p>If your function takes parameters, you should provide them as shown below.</p>
<pre><code>private void Start()
{
	CmdXpert.AddNewCommand("your_commend", x =&gt; YourFunction(x.String(), x.Integer()));
}

void YourFunction(string name, int count)
{
    Debug.Log(name + " " + count);
}
</code></pre>
<p><img src="./img/your_commend_2.png" alt="Schema"><br>
<img src="./img/your_commend_3.png" alt="Schema"></p>
<p>Additionally, you can also print the response to the console after executing the command.</p>
<pre><code>private void Start()
{
	CmdXpert.AddNewCommand("your_commend", x =&gt; 
			YourFunction(x.String(), x.Integer()),"Command worked!");
}

void YourFunction(string name, int count)
{
    Debug.Log(name + " " + count);
}
</code></pre>
<p><img src="./img/your_commend_4.png" alt="Schema"></p>
<p>Furthermore, you can customize the console as you like. You have control over changing all the variables you see in the image below.</p>
<p><img src="./img/custom_1.png" alt="Schema"><br>
<img src="./img/custom_2.png" alt="Schema"></p>
<h2 id="what-are-the-variables-we-can-provide-to-the-function">What are the variables we can provide to the function?</h2>
<p>The variables that can be assigned for now are as follows. Pay attention to the order and type requested by the function while entering your values.</p>
<ul>
<li>
<p><strong>String</strong> : To input a string value, simply write anything.</p>
</li>
<li>
<p><strong>Float</strong> : To input a float value, type e.g.‘55’ ‘51,85’ or ‘95.0’.</p>
</li>
<li>
<p><strong>Integer</strong> : To input a integer value do not use ‘,’ or ‘.’ e.g. ‘51’ or ‘95’.</p>
</li>
<li>
<p><strong>Boolean</strong> : To input a boolean value, simply write ‘true’ or ‘false’.</p>
</li>
<li>
<p><strong>GameObject/Transform</strong> : To input a GameObject or Transform type the name without space. If you leave a space while writing the name, only the first word of the name you wrote will be taken, so please write without leaving any space.</p>
</li>
<li>
<p><strong>Vector3/Vector3Int/Vector2/Vector2Int</strong> : To input any Vector type values with spaces e.g. ‘4 6 8’ or ‘156.50 1 256.85’</p>
</li>
</ul>
<p>If you have more questions, suggestions for additions, or if you notice anything missing, you can reach us through the following links:</p>
<p><a href="https://discord.gg/Em7WyPMf">Discord</a><br>
<a href="https://twitter.com/SentinelGa54657">Twitter</a><br>
<a href="https://sentinelasset.store">Website</a></p>

