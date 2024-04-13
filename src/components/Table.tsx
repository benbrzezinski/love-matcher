import Image from "next/image";
import FlexBox from "@/views/FlexBox";
import AccentText from "./AccentText";
import Button from "./Button";

export default function Table() {
  const styles = {
    padding: "px-6 py-3",
  };

  return (
    <FlexBox flow="flex flex-col" gap="gap-[10px]">
      <h2 className="pl-[10px] text-biggest font-black">History</h2>
      <div className="overflow-y-auto rounded-primary shadow-[0_3px_10px_var(--bg-primary)]">
        <table className="w-full whitespace-nowrap text-center text-small">
          <thead className="bg-secondary font-black uppercase">
            <tr>
              <th className={styles.padding}>
                <AccentText plain="Lov" accent="ers" />
              </th>
              <th className={styles.padding}>
                <AccentText plain="Res" accent="ult" />
              </th>
              <th className={styles.padding}>
                <AccentText plain="Da" accent="te" />
              </th>
              <th className={styles.padding}>
                <AccentText plain="Act" accent="ion" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-secondary-accent even:bg-secondary">
              <td className={styles.padding}>
                <p>Ben Brzen</p>
                <p>Sara Brzen</p>
              </td>
              <td className={styles.padding}>50%</td>
              <td className={styles.padding}>11.04.2024 / 14:14</td>
              <td className={styles.padding}>
                <FlexBox
                  justify="justify-center"
                  wrap="flex-wrap"
                  gap="gap-[15px]"
                >
                  <Button title="See details" style={{ padding: 3 }}>
                    <Image
                      src="/svgs/arrow-square-right.svg"
                      width={30}
                      height={30}
                      alt="arrow right in square"
                      loading="lazy"
                    />
                  </Button>
                  <Button title="Remove test" style={{ padding: 3 }}>
                    <Image
                      src="/svgs/trashcan.svg"
                      width={30}
                      height={30}
                      alt="bin"
                      loading="lazy"
                    />
                  </Button>
                </FlexBox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </FlexBox>
  );
}
