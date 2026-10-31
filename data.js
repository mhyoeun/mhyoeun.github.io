window.SITE_DATA = {
  characters: {
    luna: {
      name: "LUNA",
      en: "Luna",
      kicker: "DIVINITY · 01.01",
      color: "#d8d3ff",
      image: "",
      profile: `
        <dl class="profile-list">
          <div><dt>TYPE</dt><dd>God</dd></div>
          <div><dt>SYMBOL</dt><dd>Moon / Light</dd></div>
          <div><dt>ROLE</dt><dd>Traveler</dd></div>
        </dl>
        <p class="body-copy">루나의 기본 프로필을 여기에 적으면 됩니다. data.js만 수정하면 내용이 바뀌어요.</p>
      `,
      story: `<p class="body-copy">녹스와 만나 함께 동행하게 되는 파트가 이야기의 중심입니다. 구체적인 과거와 사건은 이후 추가하면 됩니다.</p>`,
      relation: `<p class="body-copy"><b>NOX</b><br>함께 걷는 동행자. 관계의 시작, 갈등, 변화 등을 이곳에 정리할 수 있습니다.</p>`
    },
    nox: {
      name: "NOX",
      en: "Nox",
      kicker: "DIVINITY · 12.31",
      color: "#c7d8ff",
      image: "",
      profile: `
        <dl class="profile-list">
          <div><dt>TYPE</dt><dd>God</dd></div>
          <div><dt>SYMBOL</dt><dd>Night / Shadow</dd></div>
          <div><dt>ROLE</dt><dd>Companion</dd></div>
        </dl>
        <p class="body-copy">녹스의 기본 프로필을 여기에 적으면 됩니다. 원하는 항목으로 자유롭게 바꿀 수 있어요.</p>
      `,
      story: `<p class="body-copy">루나와의 만남 이후 함께 이동하며 변화하는 흐름을 중심으로 작성할 수 있습니다.</p>`,
      relation: `<p class="body-copy"><b>LUNA</b><br>메인 관계. 서로를 어떻게 보고 있는지, 첫인상과 현재 관계를 나눠 적기 좋습니다.</p>`
    }
  },
  pages: {
    characters: {
      kicker: "ARCHIVE / 01",
      title: "CHARACTERS",
      html: `<p>현재 등록된 캐릭터는 <b>LUNA</b>, <b>NOX</b> 두 명입니다.</p><p>메인 화면의 캐릭터 카드를 눌러 상세 프로필을 열 수 있어요.</p>`
    },
    story: {
      kicker: "ARCHIVE / 02",
      title: "STORY",
      html: `<p>둘의 만남 → 동행 → 관계 변화 순으로 메인 스토리를 정리하는 공간.</p><hr><p>나중에 에피소드별 링크나 타임라인을 붙일 수 있습니다.</p>`
    },
    world: {
      kicker: "ARCHIVE / 03",
      title: "WORLD",
      html: `<p>세계관, 신의 체계, 지역, 사건, 용어 등을 정리하는 공간.</p><hr><p>루나와 녹스 외 다른 신들의 설정도 여기에 추가하면 됩니다.</p>`
    },
    gallery: {
      kicker: "ARCHIVE / 04",
      title: "GALLERY",
      html: `<p>일러스트 썸네일을 그리드로 붙일 예정인 공간입니다.</p><div class="fake-gallery"><span></span><span></span><span></span><span></span></div>`
    }
  }
};
