import Block from "../components/Block";

export default function Home() {
  return (
    <>
      <Block classOverride={`bg-gray-900 min-h-[100svh]`}>
        <h1 className="text-4xl font-bold">Engineering experiences that leave a mark</h1>
        <p>
            Here at GravenSoft, our team is commmitted to delivering you quality software solutions that scale.
        </p>
      </Block>
      <Block classOverride={`bg-gray-800`}>
        <h1 className="text-4xl font-bold">Lorem ipsum</h1>
        <p>
            dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur. Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros. Fusce nibh sapien, tincidunt quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci, ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis. Nam faucibus tincidunt est at efficitur.
        </p>
      </Block>
      <Block classOverride={`bg-gray-900`} borderVisible={false}>
        <h1 className="text-4xl font-bold">Lorem ipsum</h1>
        <p>
            dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur. Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros. Fusce nibh sapien, tincidunt quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci, ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis. Nam faucibus tincidunt est at efficitur.
        </p>
      </Block>
    </>
  );
}