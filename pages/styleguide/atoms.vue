<template>
  <div class="sg-container">
    <h1>Atoms</h1>

    <a name="colors"></a>
    <h2 class="sg-subheading">Colors</h2>

    <ul class="sg-colors no-bullets">
      <li>
        <span class="sg-swatch bg black"></span>
        <span class="sg-label">black</span>
      </li>
      <li>
        <span class="sg-swatch bg white"></span>
        <span class="sg-label">white</span>
      </li>
      <li>
        <span class="sg-swatch bg error"></span>
        <span class="sg-label">error</span>
      </li>
    </ul>

    <a name="fonts"></a>
    <h2 class="sg-subheading">Fonts</h2>

    <p>Primary font: "font-name", sans-serif;</p>
    <p><em>Primary font italic: "font-name", sans-serif;</em></p>
    <p><strong>Primary font bold: "font-name", sans-serif;</strong></p>
    <br />
    <p class="font-secondary">Secondary font: "font-name", cursive;</p>
    <p class="font-secondary">
      <em>Secondary font italic: "font-name", cursive;</em>
    </p>
    <p class="font-secondary">
      <strong>Secondary font bold: "font-name", cursive;</strong>
    </p>

    <a name="headings"></a>
    <h2 class="sg-subheading">Headings</h2>

    <h1>Heading Level 1</h1>
    <h2>Heading Level 2</h2>
    <h3>Heading Level 3</h3>
    <h4>Heading Level 4</h4>
    <h5>Heading Level 5</h5>
    <h6>Heading Level 6</h6>

    <a name="paragraphs"></a>
    <h2 class="sg-subheading">Paragraphs</h2>

    <p>
      A paragraph (from the Greek paragraphos, "to write beside" or "written
      beside") is a self-contained unit of a discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more sentences.
      Though not required by the syntax of any language, paragraphs are usually
      an expected part of formal writing, used to organize longer prose.
    </p>

    <div class="sg-element">
      <a name="blockquotes"></a>
      <h2 class="sg-subheading">Blockquotes</h2>

      <blockquote-sg position="full" />
      <blockquote-sg position="right" />
      <blockquote-sg position="left" />
    </div>

    <div class="sg-element">
      <a name="text"></a>
      <h2 class="sg-subheading">Text</h2>

      <div class="text">
        <p><a href="#">This is a text link</a></p>

        <p><strong>Strong is used to indicate strong importance</strong></p>

        <p><em>This text has added emphasis</em></p>

        <p>
          The <b>b element</b> is stylistically different text from normal text,
          without any special importance
        </p>

        <p>The <i>i element</i> is text that is set off from the normal text</p>

        <p>
          The <u>u element</u> is text with an unarticulated, though explicitly
          rendered, non-textual annotation
        </p>

        <p>
          <del>This text is deleted</del> and <ins>This text is inserted</ins>
        </p>

        <p><s>This text has a strikethrough</s></p>

        <p>Superscript<sup>®</sup></p>

        <p>Subscript for things like H<sub>2</sub>O</p>

        <p><small>This small text is small for for fine print, etc.</small></p>

        <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>

        <p>Keybord input: <kbd>Cmd</kbd></p>

        <p>
          <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q"
            >This text is a short inline quotation</q
          >
        </p>

        <p><cite>This is a citation</cite></p>
        <p>The <dfn>dfn element</dfn> indicates a definition.</p>

        <p>The <mark>mark element</mark> indicates a highlight</p>

        <p><code>This is what inline code looks like.</code></p>

        <p><samp>This is sample output from a computer program</samp></p>

        <p>
          The <var>variable element</var>, such as <var>x</var> = <var>y</var>
        </p>
      </div>
    </div>

    <a name="hr"></a>
    <h2 class="sg-subheading">Horizontal Rule</h2>

    <hr />

    <a name="unordered-lists"></a>
    <h2 class="sg-subheading">Unordered Lists</h2>

    <div class="block-content">
      <ul>
        <li>This is a list item in an unordered list</li>
        <li>
          An unordered list is a list in which the sequence of items is not
          important. Sometimes, an unordered list is a bulleted list. And this
          is a long list item in an unordered list that can wrap onto a new
          line.
        </li>
        <li>
          Lists can be nested inside of each other
          <ul>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an unordered list</li>
          </ul>
        </li>
        <li>This is the last list item</li>
      </ul>
    </div>

    <a name="ordered-lists"></a>
    <h2 class="sg-subheading">Ordered Lists</h2>

    <div class="block-content">
      <ol>
        <li>This is a list item in an ordered list</li>
        <li>
          An ordered list is a list in which the sequence of items is important.
          An ordered list does not necessarily contain sequence characters.
        </li>
        <li>
          Lists can be nested inside of each other
          <ol>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an ordered list</li>
          </ol>
        </li>
        <li>This is the last list item</li>
      </ol>
    </div>

    <a name="definition-lists"></a>
    <h2 class="sg-subheading">Definition Lists</h2>

    <dl>
      <dt>Definition List</dt>
      <dd>
        A number of connected items or names written or printed consecutively,
        typically one below the other.
      </dd>
      <dt>This is a term.</dt>
      <dd>
        This is the definition of that term, which both live in a
        <code>dl</code>.
      </dd>
      <dt>Here is another term.</dt>
      <dd>And it gets a definition too, which is this line.</dd>
      <dt>Here is term that shares a definition with the term below.</dt>
      <dd>And it gets a definition too, which is this line.</dd>
    </dl>

    <a name="form-elements"></a>
    <h2 class="sg-subheading">Form Elements</h2>
    <sample-form-sg />

    <a name="buttons"></a>
    <h2 class="sg-subheading">Buttons</h2>

    <p>
      <a class="btn btn-primary" href="#">Primary Button - Link</a>
      <a class="btn btn-secondary" href="#">Secondary Button - Link</a>
    </p>

    <p>
      <button class="btn btn-primary">Primary Button - Button</button>
      <button class="btn btn-secondary">Secondary Button - Button</button>
    </p>

    <p>
      <a class="play-button" href="#" aria-label="Play Video">
        <span class="fa fa-play"></span>
      </a>
    </p>

    <a name="callout-links"></a>
    <h2 class="sg-subheading">Callout Links</h2>

    <p>
      <a href="#" class="callout-link"
        >Callout Link <span class="fa fa-angle-double-right"></span
      ></a>
    </p>

    <a name="tables"></a>
    <h2 class="sg-subheading">Tables</h2>

    <table>
      <thead>
        <tr>
          <th>Table Heading 1</th>
          <th>Table Heading 2</th>
          <th>Table Heading 3</th>
          <th>Table Heading 4</th>
          <th>Table Heading 5</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Table Footer 1</th>
          <th>Table Footer 2</th>
          <th>Table Footer 3</th>
          <th>Table Footer 4</th>
          <th>Table Footer 5</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
      </tbody>
    </table>

    <a name="video"></a>
    <h2 class="sg-subheading">Video</h2>

    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oAKMXFTtqmQ"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div class="sg-element">
      <a name="block-images"></a>
      <h2 class="sg-subheading">Images</h2>

      <figure class="block-image position-left">
        <img src="https://placehold.it/420x420" alt="" />
      </figure>
    </div>

    <div class="sg-element">
      <a name="disclaimer"></a>
      <h2 class="sg-subheading">Disclaimer</h2>

      <div class="block-disclaimer">
        <p>
          Disclaimer text style: Special must be booked a minimum of two weeks
          from planned arrival date. Also, must include your telephone number so
          a theme can be discussed. Valid for 1, 2 or 3 bedroom condo, lakeview
          or lakefront. Valid Fall-Spring.
        </p>
      </div>
    </div>

    <div class="sg-element">
      <a name="social-icons"></a>
      <h2 class="sg-subheading">Social Icons</h2>

      <social-icons-sg />
    </div>
  </div>
</template>

<script>
import BlockquoteSG from "~/components/styleguide/blocks/BlockquoteSG";
import SampleFormSG from "~/components/styleguide/blocks/SampleFormSG";
import SocialIconsSG from "~/components/styleguide/SocialIconsSG";

export default {
  components: { BlockquoteSG, SocialIconsSG, SampleFormSG },
  layout: "styleguide",
};
</script>
